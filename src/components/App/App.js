import React from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';

const App = () => {

    const todoData = [
        {label: 'Drink Coffee', important: true, id: 1 },
        {label: 'Make React App', important: true, id: 2},
        {label: 'Improve English', important: true, id: 3},
        {label: 'Go to the gym', important: false, id: 4}
    ]

    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList todos={todoData}/>
        </div>
    )
}

export default App;