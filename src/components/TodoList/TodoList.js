import React from 'react'
import './todo-list.css'

import TodoItem from '../TodoItem/TodoItem'

const TodoList = ({ todos, onToggleImportant, onToggleDone, onDelete }) => {

    const elements = todos.map((item) => {
      const { id, ...itemProps } = item;
      return (
        <li key={id} className="list-group-item">
          <TodoItem
            { ...itemProps }
            onToggleImportant={ () => onToggleImportant(id) }
            onToggleDone={ () => onToggleDone(id) }
            onDelete={ () => onDelete(id) } />
        </li>
      );
    });
  
    return (<ul className="todo-list list-group">{ elements }</ul>);
  };
  
export default TodoList;
