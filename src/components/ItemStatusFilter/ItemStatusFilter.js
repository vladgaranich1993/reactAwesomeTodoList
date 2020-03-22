import React, { Component } from 'react'

export default class ItemStatusFilter extends Component {
    render() {
        return(
            <div>
                <button className="btn btn-info mr-1">All</button>
                <button className="btn btn-dark mr-1">Active</button>
                <button className="btn btn-success">Done</button>
            </div>
        )
    }
}