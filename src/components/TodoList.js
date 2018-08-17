import React from "react";
import Todo from "../components/Todo.js";

// functional component.
function TodoList(props) {

    const todoListWrapper = {
        backgroundColor: "#fff",
        padding: "0 20px",
    };

    const todoList = props.todolist.map((todo) => {
        return (
            <div style={todoListWrapper}>
                <Todo key={todo.id} todo={todo}/>
            </div>
        )
    });
    return (todoList);
}

export default TodoList;