import React from 'react';
import Board from './Board';
import { calculateWinner } from './utility';

const initialState = {
  squares: Array(16).fill(null),
  IsXNext: true,
};

const Game = () => {
  const [gameState, setGameState] = React.useState(initialState);

  const { winner, winnerRow } = calculateWinner(gameState.squares);

  const gameStatus = () => {
    let status = "";
    if (winner) {
      status = ` Congratulation! ${winner} have won`;
    } else {
      status = `Next player: ${gameState.IsXNext ? 'X' : 'O'}`;
    }
    return status;
  }

  const reset = () => {
    setGameState(initialState);
  }

  const handleClick = (index) => {
    const squares = gameState.squares.slice();
    const winner = calculateWinner(squares).winner;

    if (winner || squares[index]) return;
    squares[index] = gameState.IsXNext ? 'X' : 'O';
    setGameState({
      squares: [...squares],
      IsXNext: !gameState.IsXNext,
    })
  }

    return (
      <div className="game">
        <div className="game-status">{gameStatus()}</div>
        <div className="game-board">
          <Board
            squares={gameState.squares}
            winnerSquares={winnerRow}
            onClick={index => handleClick(index)}
          />
        </div>
        <div className="game-info">
          <button className="button button--new-game" onClick={() => reset()}>
            Reset
          </button>
        </div>
      </div>
    );
  };

  export default Game;
