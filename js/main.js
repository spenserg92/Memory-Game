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

const tiles = {
    img: 'imgs/bird.jpg',
    img: 'imgs/chipmunk.jpg',
    img: 'imgs/fox.jpg',
    img: 'imgs/horse.jpg',
    img: 'imgs/kitten.jpg',
    img: 'imgs/llama.jpg',
    img: 'imgs/panther.jpg',
    img: 'imgs/puppy.jpg',
    img: 'imgs/red panda.jpg',
}
console.log(tiles)



/*----- state variables -----*/
// intial state variables
let guesses

let results

/*----- cached elements  -----*/

const messageEl = document.querySelector('h2')
const newGameButton = document.querySelector('button')
const gameBoard = [...document.querySelectorAll('.card')]

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
    render()
}

init()

function renderBoard(){
    
}
    
    


/*----- event listeners -----*/