import "./App.css";
import { useState } from "react";
function Square({ value, onSquareClick, isHighlight }) {
  return (
    <button className={`square ${isHighlight ? "highlight" : ""}`} onClick={onSquareClick}>
      {value}
    </button>
  );
}
function Board({ xIsNext, squares, onPlay, winnerLine }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares).winner) return;
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const { winner, line } = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (!squares.includes(null)) {
    status = "Draw";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      {Array(3)
        .fill(null)
        .map((_, row) => (
          <div className="board-row" key={row}>
            {Array(3)
              .fill(null)
              .map((_, col) => {
                const index = 3 * row + col;
                const isHighlight = line && line.includes(index);
                return (
                  <Square
                    key={index}
                    value={squares[index]}
                    onSquareClick={() => handleClick(index)}
                    isHighlight={isHighlight}
                  />
                );
              })}
          </div>
        ))}
    </>
  );
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: lines[i] };
    }
  }
  return { winner: null, line: null };
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isAscending, setIsAscending] = useState(true);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    if (move === currentMove) {
      return (
        <li key={move}>
          <span>You are at move #{move}</span>
        </li>
      );
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  const sortedMoves = isAscending ? moves : moves.slice().reverse();
  const { line } = calculateWinner(currentSquares);
  return (
    <div className="game">
      <div className="game-board">
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          winnerLine={line}
        />
      </div>
      <div className="game-info">
        <button onClick={() => setIsAscending(!isAscending)}>
          {isAscending ? "Ascending" : "Descending"}
        </button>
        <ul>{sortedMoves}</ul>
      </div>
    </div>
  );
}
