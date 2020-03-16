import React, { Component } from 'react'

import './todo-item.css'

export default class TodoItem extends Component {

    state = {
        done: false,
        important: false
    };
    
    onLabelClick = () => {
        this.setState(({done}) => {
            return {
                done: !done
            }
        });
    }

    onMarkImportant = () => {
        this.setState(({important})=> {
            return  {
                important: !important
            }
        });
    }

    render() {
        const {label, onDeleted} = this.props;
        const {done, important} = this.state;

        let classNames = 'todo-list-item';

        if(done) {
            classNames += ' done';
        }

        if(important) {
            classNames += ' important';
        }

        return (
            <span className={classNames}>
                <span onClick={this.onLabelClick} className="todo-list-item-label">
                    {label}
                </span>
                <button onClick={onDeleted} type="button" className="btn btn-outline-danger btn-sm">
                    <i className="fa fa-trash-o"/>
                </button>
                <button onClick={this.onMarkImportant} type="button" className="btn btn-outline-success btn-sm">
                    <i className="fa fa-exclamation"/>
                </button>
            </span>
        )
    }
}