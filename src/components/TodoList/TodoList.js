import React from 'react'
// import ReactDOM from 'react-dom'
import './todo-list.css'

import TodoItem from '../TodoItem/TodoItem'

const TodoList = ({todos}) => {

    const elements = todos.map((item) => {   
        const {id, ...itemProps} = item;
        return(
            <li className="list-group-item" key={id}>
                <TodoItem 
                {...itemProps} 
                onDeleted={()=> console.log('deleted')}/>
            </li>
        )
    })

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    )
}

export default TodoList;
