import { useState } from 'react'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log'

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  const [gameState, setGameState] = useState([]);

  const activePlayer = deriveActivePlayer(gameState);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameState((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
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
