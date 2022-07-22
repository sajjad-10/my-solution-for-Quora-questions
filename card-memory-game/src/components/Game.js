import { useEffect, useState } from "react";
import Card from "./Card";
import { cardsData } from "../cards";
function Game() {
    // console.log(typeof cardsData);
    const baseCards = JSON.parse(JSON.stringify(cardsData));
    const [cards, setCards] = useState(baseCards);
    const [itemCheck, setItemCheck] = useState([]);
    const [appLocke, setAppLocke] = useState(false);

    const handleClick = (cardSelect) => {
        // console.log("item Click :", cardSelect);
        const targetId = cardSelect.id;
        const cardToFlipped = cards.find((card) => card.id === targetId);
        cardToFlipped.isFlipped = true;
        setItemCheck([...itemCheck, cardToFlipped]);
        // console.log("Cards flipped for Check :", itemCheck);
    };

    useEffect(() => {
        if (itemCheck.length === 2 && itemCheck[0].name === itemCheck[1].name) {
            // console.log("Select items is Correct");
            setItemCheck([]);
        }
        if (itemCheck.length === 2 && itemCheck[0].name !== itemCheck[1].name) {
            // console.log("Select items NOT Correct");
            setAppLocke(true);
            setItemCheck([]);
            setTimeout(() => {
                setAppLocke(false);
                setCards(baseCards);
                // console.log("Timer don");
            }, 1500);
        }
    }, [itemCheck, baseCards]);

    return (
        <section className="memory-game">
            {cards.map((card) => (
                <Card
                    card={card}
                    key={card.id}
                    onClick={appLocke ? null : () => handleClick(card)}
                />
            ))}
        </section>
    );
}

export default Game;