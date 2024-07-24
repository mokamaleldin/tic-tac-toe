import { useState } from 'react'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log'
import { WINNING_COMBINATIONS } from './winningCombinations'
import GameOver from './components/GameOver'

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function deriveGameBoard(gameState) {
  let gameBoard = [...initialGameBoard.map(array => [...array])];
  for (const turn of gameState) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function deriveWinner(gameBoard, playername) {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combination[0].row][combination[0].column];
    const secondSquare = gameBoard[combination[1].row][combination[1].column];
    const thirdSquare = gameBoard[combination[2].row][combination[2].column];

    if (firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare) {
      winner = playername[firstSquare];
    }
  }
  return winner;
}

function App() {
  const [playername, setPlayername] = useState(PLAYERS);
  const [gameState, setGameState] = useState([]);
  const activePlayer = deriveActivePlayer(gameState);


  const gameBoard = deriveGameBoard(gameState);
  const hasDraw = gameState.length === 9 && !winner;


  function handleSelectSquare(rowIndex, colIndex) {
    setGameState((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updateTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns];

      return updateTurns;
    });
  }

  function handleRestart() {
    setGameState([]);
  }

  function handlePlayerNameChange(playerSymbol, newName) {
    setPlayername(prevPlayers => {
      return {
        ...prevPlayers,
        [playerSymbol]: newName
      }
    });
  }

  const winner = deriveWinner(gameBoard, playername);

 

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={ PLAYERS.X } playerSymbol="X" isActive={ activePlayer === "X" } onChangeName={ handlePlayerNameChange } />
          <Player initialName={ PLAYERS.O } playerSymbol="O" isActive={ activePlayer === "O" } onChangeName={ handlePlayerNameChange } />
        </ol>
        { (winner || hasDraw) && <GameOver onRestart={ handleRestart } winner={ winner } /> }
        <GameBoard onSelectSquare={ handleSelectSquare } board={ gameBoard } />
      </div>
      <Log turns={ gameState } />
    </main>
  )
}

export default App;
