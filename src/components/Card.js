import { useEffect, useState } from "react";
import './Card.css'
const Card = ({count}) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const cardsData = [];
        for(let i=0;i<count;i++){
            cardsData.push({id: i, isDown: true});
        }
        setCards(cardsData);
    }, [count])

    const handleCardFlip = (index) => {
        let cardsData = [...cards];
        let count = 0
        for(let i=0;i<cardsData.length;i++){
            if(!cardsData[i].isDown){
                count++;
            }
            if(cardsData[i].id === index && count < 2){
                cardsData[i].isDown = !cardsData[i].isDown;
            }
            if(count == 2){
                console.log(count, cardsData, '')
                cardsData = cards.map(card => {
                    card.isDown = true;
                    if(card.id === index){
                        card.isDown = false;
                    }
                    return card;
                })
                break;
            }
        }
        setCards([...cardsData]);
    };

    const getTableColumns = () => {
        return (
            <>
            {cards.map(card => {
                return (
                    <td key={card.id} onClick={() => handleCardFlip(card.id)}>{card.isDown ? 'Down' : 'Up'}</td>
                )
            })}
            </>
        )
    }

    if(count %2 !== 0){
        return null;
    }

    return (
        <div>
        <table>
            <tbody>
                <tr>
                    {getTableColumns()}
                </tr>
            </tbody>
        </table>
        </div>
    )
}

export default Card;