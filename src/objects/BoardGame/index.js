import './style.css'
import CardFrontBack from '../../components/CardFrontBack'
import cards from './data'

function BoardGame() {
  const flipAndHideCards = (activeCards) => activeCards.forEach(card => card.classList.remove('-active'))

  const swapPlayer = () => {
    const $arrowDown = document.querySelector('.arrow-down')
    let currentPlayer = $arrowDown.getAttribute('data-currentPlayer')
    $arrowDown.setAttribute('data-currentPlayer', currentPlayer == 2 ? 1 : 2)
  }
  
  window.boardGame = {}
  window.boardGame.handleClick = () => {
    const $boardGame = document.querySelector('.board-game')
    const $cardsActive = $boardGame.querySelectorAll('.card-front-back.-active')

    const eachTwoCardsUp = $cardsActive.length % 2
    
    if (!eachTwoCardsUp) {
      setTimeout(() => {
        flipAndHideCards($cardsActive)
        swapPlayer()
      }, 800)
    }
  }

  const $htmlCardsList = cards.map(card => CardFrontBack(card.icon, card.altIcon))
  const $htmlCards = $htmlCardsList.join('')

  return /*html*/`
    <section class="board-game" onclick="boardGame.handleClick()">
      ${$htmlCards}
    </section>
  `
}

export default BoardGame