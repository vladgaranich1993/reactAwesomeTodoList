import React from 'react'

const ItemStatusFilter = () => {
    return(
        <div>
            <button className="btn btn-info">All</button>
            <button className="btn btn-dark">Active</button>
            <button className="btn btn-success">Done</button>
        </div>
    )
}

export default ItemStatusFilter;