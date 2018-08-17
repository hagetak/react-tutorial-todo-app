import {Component} from "react";
import React from "react";
import AppForm from "../components/AppForm.js";
import TodoList from "../components/TodoList";

class App extends Component {

    constructor() {
        super();
        this.state = {
            todos: []
        };
    }

    render() {
        return (
            <div>
                <AppForm handleSubmit={this.handleSubmit.bind(this)}/>
                <TodoList todolist={this.state.todos}/>
            </div>
        );
    }

    handleSubmit(e) {

        // submit 時、画面が切り替わってしまうのでこれで解除
        e.preventDefault();

        const title = e.target.title.value;
        const desc = e.target.description.value;
        const todos = this.state.todos.slice();

        todos.push({
            id: todos.length + 1,
            title: title,
            description: desc,
        });

        this.setState({todos: todos});

        // rest form values
        e.target.title.value = '';
        e.target.description.value = '';
    }
}

export default App;