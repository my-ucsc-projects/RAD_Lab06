import { render } from "@testing-library/react";
import React from "react";

function TodoList() {
    const toDo = ['Learn React', 'Build a project', 'Go for a walk', 'Do some exercises', 'Join a music class', 'Read a novel']
    const listItems = toDo.map((toDo) =>
        <li>{toDo}</li>
    );
    render(
        <p>{listItems}</p>
    )
}

function print() {

}

export default TodoList;