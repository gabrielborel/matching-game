import './style.css'

function PlayerScore(points = 0) {
  return /*html*/`
    <ol class="player-score" data-points=${points}>
      <li class="point">1</li>
      <li class="point">2</li>
      <li class="point">3</li>
    </ol>
  `
}

export default PlayerScore