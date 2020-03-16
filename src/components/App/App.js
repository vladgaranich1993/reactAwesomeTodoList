import React, { Component } from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import AddTodoForm from '../AddTodoForm';

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            {label: 'Drink Coffee', important: true, id: 1 },
            {label: 'Make React App', important: true, id: 2},
            {label: 'Improve English', important: true, id: 3},
            {label: 'Go to the gym', important: false, id: 4}
        ]
    };

    deleteItem = (id) => {
        this.setState(({todoData})=> {
            const idx = todoData.findIndex(i => i.id === id);
            const newArray = [todoData.slice(0, idx), todoData.slice(idx + 1)];
            return {
                todoData: newArray
            }
        })
    }

    addItem = (text) => {
        // generate id 
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        }
        // add object to the array

        this.setState(({todoData}) => {
            const newArr = [
                ...todoData,
                newItem
            ]          
            return {
                todoData: newArr
            }  
        });
    }

    render() {
        return (
            <div>
                <AppHeader toDo={1} done={3}/>
                <SearchPanel/>
                <TodoList
                todos={this.state.todoData} 
                onDeleted={this.deleteItem} />
                <AddTodoForm onItemAdded={this.addItem}/>
            </div>
        )
    }
}