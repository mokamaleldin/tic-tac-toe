import { useState } from 'react'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log'
function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameState, setGameState] = useState([])

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameState((prevTurns) => {
      let currentPlayer = "X";

      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }
      const updateTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns];

      return updateTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" playerSymbol="X" isActive={ activePlayer === "X" } />
          <Player initialName="Player 2" playerSymbol="O" isActive={ activePlayer === "O" } />
        </ol>

        <GameBoard onSelectSquare={ handleSelectSquare } turns={ gameState } />
      </div>
      <Log turns={ gameState } />
    </main>
  )
}

export default App;
