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
totalMatches = 9
const images = [

    'imgs/bird.jpg',
    'imgs/chipmunk.jpg',
    'imgs/fox.jpg',
    'imgs/horse.jpg',
    'imgs/kitten.jpg',
    'imgs/llama.jpg',
    'imgs/panther.jpg',
    'imgs/puppy.jpg',
    'imgs/red_panda.jpg',
]

const background = 'imgs/background.jpg'



/*----- state variables -----*/
// intial state variables
let matchesFound = 0
let tries = 5
let selectedCards = []
let canClick = true


/*----- cached elements  -----*/

const messageEl = document.querySelector('h2')
const newGameButton = document.querySelector('button')



const gameBoard = document.querySelectorAll('.card')

gameBoard.forEach((card, index) => {
    card.dataset.index = index;
    // card.classList.add('unflipped');
    card.addEventListener('click', flipCard)

})

// console.log(gameBoard)


/*----- functions -----*/

function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
    }
    return shuffledArray;
}
console.log(shuffleArray(images))

function init() {
    matchesFound = 0;
    tries = 5;
    canClick = true;
    selectedCards = [];

    const shuffledImages = shuffleArray([...images, ...images])
    gameBoard.forEach((card, i) => {
        card.style.backgroundImage = "url(" + background + ")"
        card.dataset.revealed = "url(" + shuffledImages[i] + ")"
        card.style.backgroundSize = 'cover'
    })
    messageEl.innerText = ''
}



function flipCard(evt) {
    if (selectedCards.length === 2) return;
    const card = evt.target
    card.style.backgroundImage = card.dataset.revealed

    selectedCards.push(card)
    if (selectedCards.length === 2) {
        if (selectedCards[0].dataset.revealed === selectedCards[1].dataset.revealed) {
            matchesFound++
            if (matchesFound === totalMatches ){
                messageEl.innerText = 'Congrats, You Win!'
            }
            selectedCards = []
        }
        else {
            setTimeout(()=>{
                selectedCards.forEach((c) => {
                    c.style.backgroundImage = "url(" + background + ")"
                })
                selectedCards = []
            }, 2000)
        }
    }

}



// function checkForWin() { 
    
// }




/*----- event listeners -----*/
init()
newGameButton.addEventListener('click', init)