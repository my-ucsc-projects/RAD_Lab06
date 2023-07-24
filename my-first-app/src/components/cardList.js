import React from "react";
import Card from "./card";

// function CardList(){
//     // let arr: [{"title": 'Card 1', "content": 'This is the content of Card 1'},{"title": 'Card2', "content": 'This is the content of Card 2'},{title: 'Card 3',content: 'This is the content of Card 3'}]

// }

const cards = [{ title: 'Card 1', content: 'This is the content of Card 1' }, { title: 'Card2', content: 'This is the content of Card 2' }, { title: 'Card 3', content: 'This is the content ofCard 3' }]

const myList = cards.map((item) => <Card title={item.title} content={item.content}/>)
// const CardList = ({ cards }) => {
//     return (
//         <div>
//             {cards.map((card, index) => (
//                 <Card key={index} title={card.title} content={card.content} />
//             ))}
//         </div>
//     );
// };
function CardList(){
    return(
        <div>{myList}</div>
    )
}

export default CardList;