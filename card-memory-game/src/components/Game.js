import { useState } from 'react'
import Card from "./Card";
import { cardsData } from '../cards'
function Game() {
  const [cards, setCards] = useState(cardsData)
  const cardClicked = (card,id) => {
    console.log('Card Select',card)
    console.log('Id Select',id)
    setCards()
  }
  console.log(cardsData);
  return (
    <section className="memory-game">
      {cards.map((card) => <Card card={card} key={card.id} onClick={() => cardClicked(card,card.id)} />)}

      <h1>SSS</h1>
    </section>
  );
}

export default Game;