import React, { Fragment } from "react";

export default function GameOver(props) {
  return(
    props.show ?
      <div>
        <div id="gameOver">
          <div>
              <p>Parabéns, Você completou o jogo!</p>
          </div>
          <button id="restart" onClick={props.handleRestart}>Jogue Novamente</button>
        </div>
      </div>
    : 
      <Fragment/>
  )
}