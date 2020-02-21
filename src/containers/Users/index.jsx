import React from 'react';
import './style.scss';
import Search from '../../components/Search'
import UserCard from '../../components/UserCard';

const Users = ({ users }) => {
    console.log(users)
    return (
        <section className="users">
            <Search
                title="Search users"
                placeholder="Enter user name..."
                onChange={(value) => console.log(value)}
            />
            <main>
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
            </main>
        </section>
    )
}

export default Users