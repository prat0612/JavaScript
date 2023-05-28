let player = {
    name: "Pratyush",
    chips: 200
}
let cards = []
let sum = 0
let hasBJ = false
let isAlive = false
let msgEl = document.getElementById("msg-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById("player-el")

function getRandomCard() {
    let card = Math.floor(Math.random()*13 + 1)
    if (card > 10)
        return 10
    else if (card === 1)
        return 11
    else    
        return card
}
function startGame() {
    // reset game
    isAlive = true  
    hasBJ = false
    cards = []                              
    sum = 0
    
    cards.push(getRandomCard())
    cards.push(getRandomCard())
    for(let i=0; i<cards.length; i++) {     // find sum of cards
        sum += cards[i]
    }
    renderGame()
}
function renderGame() {
    cardsEl.textContent = "Cards : "
    for (let i=0; i<cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum : " + sum
    if (sum < 21) {
        msgEl.textContent = "Do you want to draw new card?"
    }
    else if (sum === 21) {
        msgEl.textContent = "You've got a BlackJack!"
        hasBJ = true
    }
    else {
        msgEl.textContent = "OPPS! Game Over"
        isAlive = false
    }
}
function newCard() {
    if (hasBJ === true || isAlive === false) {
        msgEl.textContent = "Sorry, You're out of the Game"
        return    
    }
    let Card = getRandomCard()
    cards.push(Card)
    sum += Card
    sumEl.textContent = "Sum : " + sum
    renderGame()
}