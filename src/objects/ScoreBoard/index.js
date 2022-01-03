import './style.css'
import PlayerName from '../../components/PlayerName'
import VsPlayer from '../../components/VsPlayer'
import PlayerScore from '../../components/PlayerScore'

function ScoreBoard() {
  return /*html*/`
    <header class="score-board">
      ${PlayerName('Player 1')}
      ${PlayerScore(2)}
      ${VsPlayer()}
      ${PlayerScore(1)}
      ${PlayerName('Player 2')}
    </header>
  `
}

export default ScoreBoard