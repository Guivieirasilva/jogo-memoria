import React, { useEffect, useState } from "react";

import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";

import game from './game/game'

export function MemoryGame(){

  const [gameOver, setGameOver] = useState(true)
  const [cards, setCards] = useState([])

  useEffect(() => {
    setCards(game.createCardFromTechs())
  },[])

  function restart(){
    setGameOver(false)
  }

  return(
    <div>
      <GameBoard cards={cards} />
      <GameOver handleRestart={restart} show={gameOver}/>
    </div>
  )
}