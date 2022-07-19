import React, { useState, useEffect } from "react";
import axios from "axios"

import './App.css';

import Card from './Card';


/** App for drawing cards
 *
 * State x2:
 * State: cards: []
 * State: deckId = integer
 *
 * App -> Card
 */
function App() {
  //TODO: cards state
  // TODO: deckId state

  // TODO: drawCard function

  //TODO: useEffect


  return (
    <div className="App">
      <header>Draw A Card!</header>
      <Card></Card>
    </div>
  );
}

export default App;



// Clair's Thinking Space
/**
 *
 * App
 * Props:None
 * State: cards: []
 * State: deckId = integer
 *
 * function async drawCard(){
 * axios get (http://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2)
 * setCards(pile => [...pile,resp.cards[0])]
 * }
 *
 * useEffect(callback(async axios req to set(deckID)),[]) to run only once
 *
 * return (
 * <button onClick=drawCard>
 *
 * {cards.pile.map(card => <Card cardInfo=card)}
 * )
 *
 *
 * ________________________________________________
 *
 * Card component
 * State: None
 * Prop: {cardInfo}
 * Presentational
 * return (<div><img src=card.img>)
 *
 *
 *
 */