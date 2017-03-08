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
window.addEventListener("keypress", keyPresses, false);

instructions();




























// first option will need a callback function
var userInput = [];

function instructions() {

    var banner = document.getElementById("banner").innerHTML = "Welcome Menu";
    var gameDisplay = document.getElementById("gameDisplay")

    gameDisplay.style.display = 'none';

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
    switch (key) {
        case "s":
            keyCommand_S();
            break;
        case "i":
            keyCommand_I();
            break;
        default:
            console.log(key);

    }

}

function keyCommand_S() { //click will be a funciton

    var gameDisplay = document.getElementById("gameDisplay")
    var word = buildWord();
    var createNumLines = document.createElement("p");
    var element = document.getElementById("lines");

    for(var letter in word.resultWord) {
            var node = document.createTextNode(" ____ ");
            createNumLines.appendChild(node);
        }

    element.appendChild(createNumLines);
    gameDisplay.style.display = 'inline';

    window.removeEventListener("keypress", keyPresses, false);
    window.addEventListener("keypress", function(e){ guessing(e,word) },false);
}

    // element.style.display = 'block';          // Show
    // element.style.display = 'inline';         // Show
    // element.style.display = 'inline-block';   // Show
    //
    //


function buildWord(isCaptal,numOfCap) {
    var theDesider = Math.floor((Math.random() * (wordArray.length-1)) + 0);
    var dashedWord = [];
    for (var word in wordArray[theDesider]) {
        dashedWord.push(" _ ");
    }
    return { dashed:dashedWord, resultWord: wordArray[theDesider] };
}

function guessing(e,word) {
    console.log(word);
    var letterGuess = word.resultWord.indexOf(e.key);
    console.log("guessing "+ e.key);

    if(letterGuess != -1) {
        var what = word.resultWord.charAt(letterGuess);
        word.dashed[letterGuess] = what;
    } else {
        return -1;
    }

    var createNumLines = document.createElement("h3");
    var element = document.getElementById("lines");

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
}
    //
    // for(var letter in word) {
    //         // will have to adda loop here for multiple letters
    //         if(word[letter] === word[letterGuess]) {
    //                 var node = document.createTextNode("  "+ word[letter] +"  ");
    //         }else {
    //             var node = document.createTextNode(" ____ ");
    //         }
    //         createNumLines.appendChild(node);
    // }





function formatUserInput(userInput) {

}


//add in function has capital and print num of capz
//right function to generate numbertil capz
//Genereate word
// build a python script to allow others to generate their own words
