import React, { Component } from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import AddTodoForm from '../AddTodoForm';

import './app.css'

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink Tea'),
            this.createTodoItem('React'),
            this.createTodoItem('Hello')
        ]
    };

    createTodoItem(label) {
        return {
                label,
                done: false,
                important: false,
                id: this.maxId++
            }
        }
            
        deleteItem = (id) => {
            this.setState(({todoData})=> {
                const idx = todoData.findIndex(i => i.id === id);
                const newArray = [ 
                    ...todoData.slice(0, idx), 
                    ...todoData.slice(idx + 1)
                ];
                return {
                    todoData: newArray
                }
            })
        };

        addItem = (text) => {
            const newItem = this.createTodoItem(text);
            this.setState(({todoData}) => {
                const newArr = [
                    ...todoData,
                    newItem
                ]          
                return {
                    todoData: newArr
                }  
            });
        };

        onToggleImportant = (id) => {
            this.setState(({todoData})=> {
                console.log(todoData)
                return {
                    todoData: this.toggleProperty(todoData, id, 'important')
                }
            })
        }

        onToggleDone = (id) => {
            this.setState(({todoData})=> {
                return {
                    todoData: this.toggleProperty(todoData, id, 'done')
                }
            }); 
        };

        toggleProperty = (arr, id, propName) => {
            const idx = arr.findIndex(el => el.id === id);

            const oldItem = arr[idx];
            const newItem = {...oldItem,
            [propName]: !oldItem[propName]}
            
            return [
                ...arr.slice(0, idx),
                newItem,
                ...arr.slice(idx + 1)
            ]
        }

        render() {
            const {todoData} = this.state;
            const doneCount = todoData.filter(item => item.done).length;
            const todoCount = todoData.length - doneCount;

            return (
                <div className="todo-app">
                    <AppHeader toDo={todoCount} done={doneCount}/>
                    <SearchPanel/>
                    <TodoList
                        todos={todoData} 
                        onDelete={this.deleteItem} 
                        onToggleDone={this.onToggleDone}
                        onToggleImportant={this.onToggleImportant}
                    />
                    <AddTodoForm onItemAdded={this.addItem}/>
                </div>
            )
        }
}