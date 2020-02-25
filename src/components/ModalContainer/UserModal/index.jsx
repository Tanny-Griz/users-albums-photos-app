import React from 'react';

const UserModal = ({ user }) => {
    return (
        <div className='user-card'>
            <h1>{user.name}</h1>
            <p>Email: <a href={user.email}>{user.email}</a></p>
            <p>Phone: <a href={user.phone}>{user.phone}</a></p>
            <p>City: {user.address.city}</p>
            <p>Company: {user.company.name}</p>
            <p>Website: <a href={user.website}>{user.website}</a></p>
        </div>
    )
}

export default UserModal