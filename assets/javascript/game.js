
// Letters that can be pressed
var letters = ['a','b','c','d','e','f','g','h','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// All the words
var words = ['artic','brisk','chills','december','eggnog','fireplace','gloves','hibernate','ice','jacket','log','melt','polar','scarf','ski','sleet','snowball','sweater','thaw','windy','wool'];
// Selected word
var selectedWord = "";
// Letters in a word
var lettersInAWord = [];
// Number of blanks in a word
var numberOfBlanks = 0;
// Blanks and good guesses
var blanksAndGoodGuesses = [];
// Holds wrong gueses
var wrongLetters = [];
// Counter for wins and loses etc
var win = 0;
var lose = 0;
var guessesLeft = 9;
var rightGuesses = 0;


function reset()
{
    //Pick word randomly from words
    selectedWord = words[math.floor(math.random() * words.length)];
    // split the words into indeividual letters
    lettersInAWord = selectedWord.split('');
    // Get number of blanks
    numberOfBlanks = lettersInAword.length;

    //RESET
    letterGuessed = 0;
    rightGuesses = 0;
    guessesLeft = 9;
    wrongLetters =[];
    blanksAndGoodGuesses =[];
    letters = ['a','b','c','d','e','f','g','h','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    test=false;
    startGame();
}

function startGame()
{
    //Chooses word randombly from the words
    selectedWord = words[Math.floor(Math.random() * words.length)];
    //Splits the choosen word into individual letters
    lettersInAWord = selectedWord.split('');
    //Get the number of blanks
    numberOfBlanks = lettersInAWord.length;
    
    //RESET
    rightGuesses = 0;
    guessesLeft = 9;
    wrongLetters =[];
    blanksAndGoodGuesses =[];
    letters = ['a','b','c','d','e','f','g','h','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    //Populate blanks
    for(var i = 0; i< numberOfBlanks; i++)
    {
        blanksAndGoodGuesses.push('_');
        document.getElementById('currentWord').innerHTML = "Current Word: " + blanksAndGoodGuesses;
    }

    //Html 
    document.getElementById('currentWord').innerHTML = "Current Word: " + blanksAndGoodGuesses.join(' ');
    document.getElementById('guessesleft').innerHTML = "Number of guesses remaining: " + guessesLeft;
    document.getElementById('wins').innerHTML = "Wins: " + win;
    document.getElementById('lossCounter').innerHTML = "Loses: " + lose;
    document.getElementById('lettersguessed').innerHTML = "Letters already guessed: " + wrongLetters;
    // Test
    console.log(selectedWord);
    console.log(lettersInAWord);
    console.log(numberOfBlanks);
    console.log(blanksAndGoodGuesses);
}

function compareLetters(userKey)
{
                console.log('Jackpot!');
                //If user key exist in words then perform this function 
                if(selectedWord.indexOf(userKey) > -1)
                {
                    //Loops but depending on the amount of blanks 
                    for(var i = 0; i < numberOfBlanks; i++)
                    {
                        //Fills in right index with user key
                        if(lettersInAWord[i] === userKey)
                        {
                            rightGuesses++;
                            blanksAndGoodGuesses[i] = userKey;
                            document.getElementById('currentWord').innerHTML = "Current Word: " + blanksAndGoodGuesses.join(' ');
                        }   
                    }
                    //Test
                    console.log(blanksAndGoodGuesses);
                }
                //Wrong Keys
                else
                {
                    wrongLetters.push(userKey);
                    guessesLeft--;
                    //Html
                    document.getElementById('guessesleft').innerHTML = "Number of guesses remaining: " + guessesLeft;
                    document.getElementById('lettersguessed').innerHTML = "Letters already guessed: " +  wrongLetters;
                    //Test
                    console.log('Wrong Letters = ' + wrongLetters);
                    console.log('Guesses left are ' + guessesLeft);
                }

}
 
function winLose()
{
    // When number blanks if filled with right words then you win
    if(rightGuesses === numberOfBlanks)
    {
        //Counts Wins 
        win++;
        //Html
        document.getElementById('wins').innerHTML = "Wins: " + win;
        alert('You Win');
        reset();
    }
    // When number of Guesses reaches 0 then You lose
    else if(guessesLeft === 0)
    {
        //Counts losses
        lose++;
        //Html
        document.getElementById('lossCounter').innerHTML = "Loses: " + lose;
        alert('You Lose');
        reset();
    }
}

//Sart Game
startGame();

document.onkeyup = function(event)
{
    test = true;
    var letterGuessed = event.key;
    for(var i = 0; i < letters.length; i++)
    {   
        if(letterGuessed === letters[i] && test === true)
        {
            var spliceTheword = letters.splice(i,1);
            //Test
            console.log('Double word is = ' + letters[i])
            console.log('Spliced Word is = ' + spliceTheword);

            compareLetters(letterGuessed);
            winLose();
        }
    }
        
}
