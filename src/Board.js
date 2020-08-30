import React from 'react';
import Square from './Square';

const Board = (props) => {
  const getWinnerClass = (index) => props.winnerSquares &&
    (props.winnerSquares[0] === index ||
      props.winnerSquares[1] === index ||
      props.winnerSquares[2] === index ||
      props.winnerSquares[3] === index)
    ? 'square--green'
    : '';

  return (
    <div className="board">
      {props.squares.map((square, i) => (
        <Square winnerClass={getWinnerClass(i)} key={i} value={square} onClick={() => props.onClick(i)} />
      ))}
    </div>
  );
}

export default Board;