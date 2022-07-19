import React, { useState, useEffect } from "react";
import axios from "axios"

import './App.css';

import Card from './Card';

const BASE_URL = 'http://deckofcardsapi.com/api';


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
  const [ deck, setDeck ] = useState({
    deckId: null,
    isLoading: true
  });
  console.log('App, deck', deck);
  
  /** fetch DeckID when first starting the app */
  useEffect(function fetchDeckIdOnMount(){
    console.log('useEffect');
    async function fetchDeckId() {
      const deckResult = await axios.get(`${BASE_URL}/deck/new`);
      setDeck({
        deckId: deckResult.data.deck_id,
        isLoading: false
      });
    }
    fetchDeckId();
  }, []);
  
  if(deck.isLoading){
    return <i>Shuffling the deck!</i>;
  } 
  
  // TODO: drawCard function


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
 {
    "success": true,
    "deck_id": "3p40paa87x90",
    "shuffled": false,
    "remaining": 52
}
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