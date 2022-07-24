import React from "react";


export default function CardElement(props){
  return(
    <div id={props.card.id} className="card flip" >
      <div className="card_front">
        <img 
          src={`assets/imagens/${props.card.icon}.png`} 
          className="icon" 
          alt={props.card.icon}
        />
      </div>

      <div className="card_back">
        {"</>"}
      </div>
    </div>
  )
}