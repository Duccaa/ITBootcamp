import React from 'react'

const Header = ({company}) => {
    return (
        <header id='main-header'>
            <h1>{company.name}</h1>
        </header>
    )
}

export default Header