import React, { Component } from 'react';
import './add-todo-form.css';

export default class AddTodoForm extends Component {

    deleteTodo = () => {
        this.setState({
            newTodo: {

            }
        });
    }

    render() {
        return(
            <div className="add-todo-form">
                <button onClick={() => {this.props.onItemAdded('Hello')}} className="btn btn-outline-secondary">
                    Add Todo
                </button>
            </div>
        )
    }
}

