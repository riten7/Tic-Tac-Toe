import React from 'react';
import Square from './Square';

const Board = (props) => {
  const getWinnerClass = (index) => props.winnerRow &&
    (props.winnerRow[0] === index ||
      props.winnerRow[1] === index ||
      props.winnerRow[2] === index ||
      props.winnerRow[3] === index)
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