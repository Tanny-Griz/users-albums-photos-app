import React from 'react';
import './style.scss';

const UserCard = ({ user, handleSetId }) => {
    return (
        <>
            <div className="holder-user">
                <div className="user-card">
                    <h1>Name: {user.name}</h1>
                    <p><a href={`mailto:${user.email}`}>Email: {user.email}</a></p>
                    <p><a href={`tel:${user.phone}`}>Phone: {user.phone}</a></p>
                    <div className="btn-group">
                        <button onClick={() => handleSetId(user.id, 'info')}>get info</button>
                        <button className="edit" onClick={() => handleSetId(user.id, 'edit')}>Edit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserCard