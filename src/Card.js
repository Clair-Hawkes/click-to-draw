import React from "react";

const DEFAULT_CARD = {
  "image": "http://deckofcardsapi.com/static/img/KH.png",
  "value": "KING",
  "suit": "HEARTS",
  "code": "KH"
};

/** Card component for presenting a card img.
 *
 * Props:
 * - card: {cardInfo}
 *
 * App -> Card
 */
function Card({card=DEFAULT_CARD}){
  
  return (
    <div><img src={card.image} alt={`${card.value} of ${card.suit}`}/></div>
  )
}

export default Card;