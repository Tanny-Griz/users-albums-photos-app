import React, {useState} from 'react';

const UserModalEdit = ({ user, handleChangeUser }) => {
    const [editedUser, setEditedUser] = useState(user);
    return (
        <div className='user-card'>
            <h3>{editedUser.name}</h3>
            <p>Change name:</p>
            <input 
            type="text"
            value={editedUser.name}
            onChange={e => setEditedUser({...editedUser, name: e.target.value})}
            />
            <p>Change email:</p>
            <input 
            type="text"
            value={editedUser.email}
            onChange={e => setEditedUser({...editedUser, email: e.target.value})}
            />
            <p>Change phone:</p>
            <input 
            type="text"
            value={editedUser.phone}
            onChange={e => setEditedUser({...editedUser, phone: e.target.value})}
            />
            <button onClick={() => handleChangeUser(editedUser)}>Save</button>
        </div>
    )
}

export default UserModalEdit;