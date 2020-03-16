import React, { Component } from 'react'

export default class ItemStatusFilter extends Component {
    render() {
        return(
            <div>
                <button className="btn btn-info">All</button>
                <button className="btn btn-dark">Active</button>
                <button className="btn btn-success">Done</button>
            </div>
        )
    }
}