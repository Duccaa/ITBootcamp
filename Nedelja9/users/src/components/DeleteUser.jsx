import React from 'react'

const DeleteUser = ({filter, users, setUsers}) => {

    const handleDelete = (id) => {
        let temp = [...users]
        temp.splice(temp.findIndex(user => user.id === id), 1)
        setUsers(temp)
    }

    return(
    <div>
        {   users
                .filter(user => user.first_name.concat(user.last_name).toLowerCase().includes(filter.toLowerCase()))
                .map(user => <p key={user.id}>User's full name: {user.first_name} {user.last_name}
                            <button onClick={() => handleDelete(user.id)}>Delete</button></p>)
        }
    </div>
    )
}
export default DeleteUser