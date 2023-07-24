import React from "react";


function ToDOList() {
    const toDo = ['Learn React', 'Build a project', 'Go for a walk','Do some exercises','Join a music class','Read a novel']
    
    const myList = toDo.map((item) => <li>{item}</li>)

    return (
        <div>
            <h2>My To Do List: </h2>
            <ul>{myList}</ul>
        </div>
        
        // myList
        )
}

export default ToDOList;