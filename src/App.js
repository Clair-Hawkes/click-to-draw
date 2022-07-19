import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>Draw A Card!</header>
    </div>
  );
}

export default App;



// Clair's Thinking Space
/**
 *
 * App
 * Props:None
 * State: Cards: []
 * State: deckId = integer
 *
 * function async drawCard(){
 * axios get (http://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2)
 * }
 *
 * useEffect(callback(async axios req to set(deckID)),[]) to run only once
 *
 * return (
 * <button onClick=drawCard>
 *
 * {cards.pile.map(card => <div><img src=card.img>)}
 *
 *
 * )
 *
 *
 *
 *
 */