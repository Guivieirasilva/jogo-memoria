import React, { useState } from "react";
import GameOver from "./components/GameOver";

export function MemoryGame(){

  const [gameOver, setGameOver] = useState(true)

  function restart(){
    setGameOver(false)
  }

  return(
    <div>
      <GameOver handleRestart={restart} show={gameOver}/>
    </div>
  )
}