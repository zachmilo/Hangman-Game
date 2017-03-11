var wordArray = [ "the",
"of",
"and",
"to",
"a",
"in",
"that",
"I",
"was",
"he",
"his",
"with",
"is",
"it",
"for",
"as",
"had",
"you",
"not",
"be",
"on",
"at",
"by",
"her",
"which",
"have",
"or",
"from",
"this",
"but",
"all",
"him",
"she",
"were",
"they",
"my",
"are",
"so",
"me",
"their",
"an",
"one",
"de",
"we",
"who",
"would",
"said",
"been",
"no",
"He",
"will",
"them",
"when",
"if",
"there",
"more",
"out",
"And",
"It",
"any",
"up",
"into",
"your",
"has",
"do",
"what",
"could",
"but",
"our",
"than",
"other",
"some",
"very",
"man",
"upon",
"about",
"its",
"only",
"time",
"may",
"la",
"like",
"little",
"then",
"now",
"should",
"can",
"made",
"did",
"such",
"A",
"great",
"In",
"must",
"these",
"two",
"before",
"see",
"us",
"over",
"et",
"much",
"know",
"after",
"she",
"first",
"i",
"good",
"Mr",
"down",
"never",
"most",
"You",
"where",
"those",
"old",
"men",
"own",
"shall",
"le",
"came",
"Project",
"without",
"come",
"make",
"This",
"being",
"day",
"might",
"long",
"through",
"himself",
"work",
"how",
"go",
"am",
"If",
"way",
"en",
"even",
"que",
"many",
"well",
"say",
"They",
"it",
"every",
"We",
"too",
"think",
"under",
"life",
"went",
"back",
"same",
"There",
"last",
"found",
"take",
"people",
"thought",
"here",
"still",
"les",
"just",
"while",
"def",
"also",
"again",
"against",
"place",
"away",
"him",
"get",
"To",
"young",
"die",
"though",
"yet",
"What",
"give",
"hand",
"eyes",
"ever",
"Then",
"part",
"des",
"left",
"When",
"things",
"saw",
"years",
"took",
"nothing",
"put",
"new",
"three",
"always",
"und",
"off",
"As",
"once",
"another",
"His",
"right",
"don",
"between",
"each",
"For",
"face",
"because",
"whom",
"That",
"few",
"der",
"tell",
"son",
"love",
"far",
"un",
"seemed",
"house",
"hw",
"got",
"God",
"head",
"called",
"looked",
"At",
"whole",
"set",
"find",
"Mrs",
"world",
"having",
"thing",
"both",
"told",
"let",
"look",
"THE",
"night",
"going",
"heard",
"mind",
"knew",
"No",
"heart",
"seen",
"se",
"days",
"qui",
"name",
"among",
"done",
"better",
"So",
"full",
"something",
"du",
"moment",
"gave",
"country",
"er",
"almost",
"Gutenberg",
"soon",
"them",
"course",
"On",
"cannot",
"asked",
"small",
"ne",
"enough",
"il",
"want",
"side",
"woman",
"however",
"home",
"brought",
"whose",
"nor",
"father",
"me",
"quite",
"words",
"given",
"till",
"pos",
"taken",
"use",
"hands",
"does",
"OF",
"until",
"end",
"turned" ];

var commands = [ {keyCommand:"I", textCommand:"Prints instructions *required."}, {keyCommand:"S", textCommand:"This will start the program."}, {keyCommand:"B", textCommand:"Add you own words to the list."}  ];

instructions();

var numCount = 0;
var gameOver = false;
var allReadyGuessed = "";

function run() {
    instructions()
}
function instructions() {
    document.addEventListener("keypress", keyPresses, false);

    document.getElementById("banner").innerHTML = "Welcome";
    var gameDisplay = document.getElementById("gameDisplay")

    gameDisplay.style.visibility = 'hidden';
    for (var command in commands) {
        var listOptions = document.createElement("li");
        var node = document.createTextNode("Press Key: " + commands[command].keyCommand + " to " + commands[command].textCommand);
        listOptions.appendChild(node);
        var element = document.getElementById("display");
        element.appendChild(listOptions);
    }
}

function keyPresses(e) {
    var key = e.key.toLowerCase();
    if(key === "s") {
        var word = keyCommand_S();
        document.removeEventListener("keypress", keyPresses);
        document.addEventListener("keypress", function test(e) {
             guessing(e,word);
             if(gameOver) {
                 document.removeEventListener("keypress", test);
                 document.addEventListener("keypress", keyPresses);
                 gameOver = false;
             }
         });
    }
    else if(key ==="i"){
            keyCommand_I();
    }
}

function keyCommand_S() {

    var gameDisplay = document.getElementById("gameDisplay");
    var word = buildWord();
    numCount= (word.resultWord.length) * 2;

    document.getElementById("gameBanner").innerHTML = "Begin you get "+numCount;

    var createNumLines = document.createElement("p");
    var element = document.getElementById("lines");

    for(var letter in word.resultWord) {
            var node = document.createTextNode(" ____ ");
            createNumLines.appendChild(node);
    }

    element.innerHTML = createNumLines.innerHTML;

    gameDisplay.style.visibility = 'visible';
    return word;
}

function keyCommand_I () {

    var instructions = document.getElementById("instructions");
    document.getElementById("gameBanner").innerHTML = "How to Play";
    var createp = document.createElement("p");
    var element = document.getElementById("lines");

    var stringText = `Press the "s" key to begin the game it will display a number of lines representing the number of letters.
                      Press keys on keyboard to begin guessing, but be careful becuase you only have a certian amount of guesses.`;
    var node = document.createTextNode(stringText);
    createp.appendChild(node);


    element.innerHTML = createp.innerHTML;
    gameDisplay.style.visibility = 'visible';
}

function buildWord(isCaptal,numOfCap) {

    var theDesider = Math.floor((Math.random() * (wordArray.length-1)) + 0);
    var dashedWord = [];
    for (var word in wordArray[theDesider]) {
        dashedWord.push("_");
    }
    return { dashed:dashedWord, resultWord: wordArray[theDesider] };
}

function guessing(e, word) {

    if(allReadyGuessed.indexOf(e.key) === -1) {
        allReadyGuessed+=" "+ e.key;
    }

    var createNumLines = document.createElement("p");
    var element = document.getElementById("lines");

    for (var letter in word.resultWord) {
        if (e.key === word.resultWord.charAt(letter)) {

            word.dashed[letter] = word.resultWord.charAt(letter);
        }
    }

    //var createNumLines = document.createElement("p");
    //var element = document.getElementById("lines");

    for (var display in word.dashed) {

            if(word.dashed[display] === "_") {
                var node = document.createTextNode(" ____ ");

            }
            else {
                    var node = document.createTextNode("  "+ word.dashed[display] +"  ");
             }
             createNumLines.appendChild(node);
    }

    element.innerHTML = createNumLines.innerHTML;
    countTrack(word.resultWord);
}

function countTrack(word) {

    numCount--;
    document.getElementById("gameBanner").innerHTML = "Guesses Left: "+numCount+" Already Guessed: " +allReadyGuessed;

    if(0 === numCount) {
        var createNumLines = document.createElement("p");
        var element = document.getElementById("lines");
        var node = document.createTextNode("Game Over Press s to play a new game");

        createNumLines.appendChild(node);
        element.innerHTML = createNumLines.innerHTML;
        document.getElementById("gameBanner").innerHTML = "Guesses Left: none";

        numCount = 0;
        gameOver = true;
    }

}


//add in function has capital and print num of capz
//right function to generate numbertil capz
//Genereate word
//have users add thier own list;
