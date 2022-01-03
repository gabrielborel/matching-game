import './style.css'

function PlayerScore(points = 0) {
  return /*html*/`
    <ol class="player-score" data-points=${points}>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ol>
  `
}

export default PlayerScore