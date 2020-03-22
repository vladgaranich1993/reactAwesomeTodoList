import React from 'react'

const SearchPanel = () => {
    const placeHolderSearch = 'type here to search';
    const searchStyle = {
        fontSize: '20px'
    }

    return(
        <div className="mb-3">
            <input className="form-control" style={searchStyle} placeholder={placeHolderSearch}/>
        </div>
    )
}

export default SearchPanel;