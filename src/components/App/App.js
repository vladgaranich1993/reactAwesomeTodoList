import React, { Component } from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';

export default class App extends Component {

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

    render() {
        return (
            <div>
                <AppHeader toDo={1} done={3}/>
                <SearchPanel/>
                <TodoList
                todos={this.state.todoData} 
                onDeleted={this.deleteItem} />
            </div>
        )
    }
}