import './style.css'

function ArrowDown(currentPlayer = 1) {
  return /*html*/`
    <img class="arrow-down"
         data-currentPlayer=${currentPlayer}
         src="src/images/arrowdown.png" 
         alt="Ícone de uma seta para baixo">
  `
}

export default ArrowDown