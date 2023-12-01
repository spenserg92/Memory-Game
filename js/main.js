// Pseudocode

// Board is intialized
// There are 18 cards on the board
// There are 9 matches
// Cards are intialized to unflipped
// Unflipped cards have a background image
// User clicks on a card to start the game
// User has 3 tries to guess all the matches
// When card is clicked it flips to show a new image
// if match is made both cards stay flipped
// if match is not made cards flip back to original position
// if user runs out of guesses show "Sorry, you lose." message.
// if user guessses all matches correctly show "Congrats, you win!" message
// messages will display on the page as an element
// User can start a new game by clicking the "new game" button


/*----- constants -----*/
// variable for tile states
const totalMatches = 9
const images = [
    
    'imgs/bird.jpg',      'imgs/bird.jpg',
    'imgs/chipmunk.jpg',  'imgs/chipmunk.jpg',
    'imgs/fox.jpg',       'imgs/fox.jpg',
    'imgs/horse.jpg',     'imgs/horse.jpg',
    'imgs/kitten.jpg',    'imgs/kitten.jpg',
    'imgs/llama.jpg',     'imgs/llama.jpg',
    'imgs/panther.jpg',   'imgs/panther.jpg',
    'imgs/puppy.jpg',     'imgs/puppy.jpg',
    'imgs/red panda.jpg',  'imgs/red panda.jpg',
]



/*----- state variables -----*/
// intial state variables
let matchesFound = 0
let tries = 3
let selectedCards = []
let canClick = true


/*----- cached elements  -----*/

const messageEl = document.querySelector('h2')
const newGameButton = document.querySelector('button')

const shuffledImages = shuffleArray(images);

const gameBoard = document.querySelectorAll('.card')

gameBoard.forEach((card, index) => {
    card.dataset.index = index;
    card.classList.add('unflipped');
    card.addEventListener('click', init)
    card.style.backgroundImage = 'url("imgs/Mountain Background.jpg")';
    
})

console.log(gameBoard)


/*----- functions -----*/

function shuffleArray(array){
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
    }
    return shuffledArray;
}
// console.log(shuffleArray(images))

function init(){
    matchesFound = 0;
    tries = 3;
    canClick = true;
    selectedCards = [];
    
    const backgroundImage = 'imgs/Mountain Background.jpg'
    
    gameBoard.forEach((card) => {
        card.style = backgroundImage
    });
    gameBoard.forEach(card => {
        card.classList.remove('visible');
    })
}



function flipCard(){}
function checkForMatch(){}
function checkForWin(){}




/*----- event listeners -----*/

newGameButton.addEventListener('click', init)