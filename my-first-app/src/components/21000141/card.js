import React from "react";
import './card.css'

// class Card extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             Title:props.title
//         }
//         this.state = {
//             Content: props.content
//         }
//     }
//     render(){
//         return(
//             <div className="card">
//                 <h2>{this.Title}</h2>
//                 <p>{this.Content}</p>
//             </div>
//         )
//     }

// }

function Card(props){

    return (
        <div className="card">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    )

}

export default Card;