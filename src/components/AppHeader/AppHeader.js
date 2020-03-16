import React from 'react'
// import ReactDOM from 'react-dom'

const AppHeader = ({todo, done}) => {
    return (
        <div>
            <h1>todo</h1>
             <h2>{todo} more todo, {done}done</h2>
        </div>
    )
}

export default AppHeader;