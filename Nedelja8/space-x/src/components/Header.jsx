import React, { useState } from 'react'
import { getCompanyInfo } from '../services'

const Header = () => {
    const [info, setInfo] = useState({})

    getCompanyInfo().then(res => {
        setInfo(res.data)
    })

    return (
        <div class='header'>
        <h1 className='title'>{info.name}</h1>
        </div>
    )
}

export default Header