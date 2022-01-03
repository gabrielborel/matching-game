import './style.css'
import PlayerName from '../../components/PlayerName'
import VsPlayer from '../../components/VsPlayer'
import PlayerScore from '../../components/PlayerScore'
import ArrowDown from '../../components/ArrowDown'

function ScoreBoard() {
  return /*html*/`
    <header class="score-board">
      ${ArrowDown(1)}
      ${PlayerName('Player1')}
      ${PlayerScore(2)}
      ${VsPlayer()}
      ${PlayerScore(1)}
      ${PlayerName('Player2')}
    </header>
  `
}

export default ScoreBoard