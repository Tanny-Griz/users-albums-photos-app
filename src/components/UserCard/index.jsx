import React from 'react';
import './style.scss';

const UserCard = ({ user }) => {
    return (
        <>
            <div className="holder-user">
                <div className="user-card">
                    <h1>Name: {user.name}</h1>
                    <a href={`mailto:${user.email}`}>Email: {user.email}</a>
                    <a href={`tel:${user.phone}`}>Phone: {user.phone}</a>
                </div>
            </div>

        </>
    )
}

export default UserCard