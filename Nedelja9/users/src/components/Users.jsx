import React from 'react'
import User from './User'

const Users = ({users}) => {
    return (
        <div>
        {users.map(user => <User key={user.id} name ={user.first_name} surname={user.last_name}/>)}
        </div>
    )
}

export default Users