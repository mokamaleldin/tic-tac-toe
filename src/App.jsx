import Player from './components/Player'
function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players" >
          <Player initialName="Player 1" playerSymbol="x" />
          <Player initialName="Player 2" playerSymbol="o" />
        </ol>

        Game
      </div>
      log
    </main>
  )
}

export default App;
