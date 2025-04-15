import React, { useState } from 'react'
// import './App.css'
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";

const App = () => {
  const [game, setGame] = useState(new Chess());

  const makeAMove = (move) => {
    const gameCopy = new Chess(game.fen());
    const result = gameCopy.move(move);
    if (result) setGame(gameCopy);
    return result;
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Chessboard</h1>
      <Chessboard
        position={game.fen()}
        onPieceDrop={(sourceSquare, targetSquare) =>
          makeAMove({
            from: sourceSquare,
            to: targetSquare,
            promotion: "q", // auto-promote to queen
          })
        }
      />
    </div>
  );
};

export default App;