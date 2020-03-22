import React from 'react'
// import ReactDOM from 'react-dom'

const SearchPanel = () => {
    const placeHolderSearch = 'type here to search';
    const searchStyle = {
        fontSize: '20px'
    }

    return(
        <div className="mb-3">
            <input className="input-group-text" style={searchStyle} placeholder={placeHolderSearch}/>
        </div>
    )
}

export default SearchPanel;