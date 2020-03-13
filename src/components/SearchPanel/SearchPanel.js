import React from 'react'
// import ReactDOM from 'react-dom'

import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';

const SearchPanel = () => {
    const placeHolderSearch = 'type here to search';
    const searchStyle = {
        fontSize: '20px'
    }

    return(
    <div className="d-flex">
        <input style={searchStyle} placeholder={placeHolderSearch}/>
        <ItemStatusFilter/>
    </div>
    )
}

export default SearchPanel;