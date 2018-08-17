import {Component} from "react";
import React from "react";

class Todo extends Component {
    render() {

        const todoItemStyle = {
            margin: "0 auto",
            width: "60%",
            borderBottom: "1px solid #f0f0f0",
            padding: "12px 8px"
        }

        return (
            <div className="todo-item" style={todoItemStyle}>
                <div className="todo-item-title"> Title: {this.props.todo.title}</div>
            </div>
        )
    }

}
export default Todo;