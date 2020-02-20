import React from 'react';
import './style.scss';
import Search from '../../components/Search'
import UserCard from '../../components/UserCard';


const Users = ({users}) => {
    return (
        <>
        <section className="users">
            <Search
             title="Search users"
             placeholder="Enter value"
             onChange={(value)=> console.log(value)}
            />

        <main>
           <UserCard user={{name: "Eva"}} key={user.name+user.id} />
        </main>
        </section>
       
        </>
    )
}

export default Users