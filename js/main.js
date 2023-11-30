// Pseudocode

// Board is intialized
// There are 18 tiles on the board
// There are 9 matches
// User clicks on a tile to start the game
// User has 3 tries to guess all the matches
// When tile is clicked it flips to show image
// if match is made both tiles stay flipped
// if match is not made tiles flip back to original position
// if user runs out of guesses show "Sorry, you lose." message.
// if user guessses all matches correctly show "Congrats, you win!" message
// User can start a new game by clicking the "new game" button


/*----- constants -----*/
// variable for tile states
const TILE_STATE = {
    hidden: 'hidden',
    revealed: 'revealed',
    matched: 'matched'
}






/*----- state variables -----*/
// intial state variables
let guesses
let results
let board

/*----- cached elements  -----*/

const messageEl = document.querySelector('h2')
const newGameButton = document.querySelector('button')


// console.log(gameBoard)


/*----- functions -----*/

function init(){
    guesses = 3
    results = null

    board = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ]
    // render()
}

init()


// function renderBoard (boardElement) {
    
//     }

function generateCards(boardSize){
    const totalPairs = boardSize / 2;
    const idxs = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    const tiles = [
        'imgs/bird.jpg',
        'imgs/chipmunk.jpg',
        'imgs/fox.jpg',
        'imgs/horse.jpg',
        'imgs/kitten.jpg',
        'imgs/llama.jpg',
        'imgs/panther.jpg',
        'imgs/puppy.jpg',
        'imgs/red panda.jpg',
    ]

    let cards = [];

    for (let i = 0; i < totalPairs; i++){
        cards.push({idx: idxs[i], tile: tiles[i], isFlipped: false });
        cards.push({idx: idxs[i], tile: tiles[i], isFlipped: false });
    }
    cards.sort(() => Math.random() - 0.5);
    return cards;
}
console.log(generateCards)


/*----- event listeners -----*/

newGameButton.addEventListener('click', init)