import React from 'react'
// import ReactDOM from 'react-dom'

import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';

const SearchPanel = () => {
    const placeHolderSearch = 'type here to search';
    const searchStyle = {
        fontSize: '20px'
    }

    return(
    <div className="d-flex col-12">
        <input className="input-group-text" style={searchStyle} placeholder={placeHolderSearch}/>
        <ItemStatusFilter/>
    </div>
    )
}

export default SearchPanel;