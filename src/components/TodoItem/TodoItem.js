import React from 'react'
// import ReactDOM from 'react-dom'

import './todo-item.css'

const TodoItem = ({label, important = false}) => {

    const style = {
        color: important ? 'tomato' : '#000'
    };

    return (
        <span style={style}>
            {label}
        </span>
    )
}

export default TodoItem;