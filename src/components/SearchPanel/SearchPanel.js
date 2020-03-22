import React from 'react'

const SearchPanel = () => {
    const placeHolderSearch = 'type here to search';
    const searchStyle = {
        fontSize: '20px'
    }

    return(
        <div className="mb-3">
            <input className="form-control" style={searchStyle} placeholder={placeHolderSearch}/>
            <div className="mt-3">
                <button type="button" className="mr-2 btn btn-info">All</button>
                <button className="mr-2 btn btn-primary">Active</button>
                <button className="btn btn-success">Done</button>
            </div>
            
        </div>
    )
}

export default SearchPanel;