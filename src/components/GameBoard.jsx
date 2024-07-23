
const initialGameBoard = [
    [null, "x", "o"],
    [null, null, null],
    [null, null, null],
]
export default function GameBoard() {
    return (
        <ol id="game-board">
            { initialGameBoard.map((row, rowIndex) => {
                <li key={ rowIndex }>

                </li>
            }) }
        </ol>
    )
}