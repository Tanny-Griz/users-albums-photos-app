import React, { useEffect, useState } from 'react';
import './style.scss';
import UserCard from '../../components/UserCard';

const Users = ({ users }) => {
    return (
        <div className="container">
            <div className="holder-cards">
                {users.map(user => {
                    return <UserCard
                        user={user}
                        key={user.name + user.id}
                    />
                })}
            </div>
        </div>
    )
}

export default Users