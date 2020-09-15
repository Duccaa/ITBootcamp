import React, { useState } from 'react'
import DeleteUser from './DeleteUser'

const Filter = ({filter, setFilter, users, setUsers}) => {

    const [show, setShow] = useState(false)
    
    return (
        <div style={{padding: '15px'}}>
        <input placeholder="Start search"
        onChange={(e) => {
        setFilter(e.target.value)
        setShow(true)
        }}/>    
            <div style={{display: show ? 'block' : 'none'}}>
                <DeleteUser filter={filter} users={users} setUsers={setUsers} />
            </div>
        </div>
    )
}

export default Filter