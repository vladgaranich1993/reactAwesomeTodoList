import React, { Component } from 'react';

export default class AddTodoForm extends Component {

    state = {
        label: ''
    }

    onLabelChange = (e) => {
      this.setState({
        label: e.target.value
      })  
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        })
    }

    render() {   
        return(
            <form onSubmit={this.onSubmitForm}>
                <input className="form-control" onChange={this.onLabelChange} type="text" placeholder="Enter todo title"
                value={this.state.label}
                />
                <button className="btn btn-outline-secondary mt-2">
                    Add Todo
                </button>
            </form>
        )
    }
}

