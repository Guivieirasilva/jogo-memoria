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
    game.clearCards()
    setCards(game.createCardFromTechs())
    setGameOver(false)
  }

  function handleFlip(card){
    if(game.setCard(card.id)){

      if(game.secondCard){
          if (game.checkMath()){
              game.clearCards();
              if(game.checkGameOver()){
                //Game Over
                setGameOver(true)
              }
          }else{
              setTimeout(() => {
                // No Match
                  game.unFlipCards();
                  setCards([...game.cards])

              }, 1000);
          }
      }
    }
    setCards([...game.cards])
  }

  return(
    <div>
      <GameBoard handleFlip={handleFlip} cards={cards} />
      <GameOver handleRestart={restart} show={gameOver}/>
    </div>
  )
}