import React from 'react'
// import ReactDOM from 'react-dom'

const AppHeader = ({toDo, done}) => {
    return (
        <div>
            <h1>Todo List</h1>
             <h2>{toDo} more todo, {done} done</h2>
        </div>
    )
}

export default AppHeader;