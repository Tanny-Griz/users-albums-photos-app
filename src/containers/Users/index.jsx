import React, { useEffect, useState } from 'react';
import './style.scss';
import UserCard from '../../components/UserCard';
import Search from '../../components/Search';
import Modal from '../../components/ModalContainer';
import UserModal from '../../components/ModalContainer/UserModal';
import UserModalEdit from '../../components/ModalContainer/UserModal/UserModalEdit';


const Users = ({ users, setUsers }) => {
    // modal
    const [checkedUserId, setCheckedUserId] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [typeOfModal, setTypeOfModal] = useState('edit');
    const [user, setUser] = useState({});

    // filter
    const [filtredUsers, setfiltredUsers] = useState([]);

    const handleSetId = (id, type) => {
        setTypeOfModal(type);
        setCheckedUserId(id);
    };

    useEffect(() => {
        setfiltredUsers(users);
    }, [users]);

    useEffect(() => {
        if (checkedUserId !== null && users.length) {
            const user = users.find(u => u.id === checkedUserId);
            setUser(user);
            setShowModal(true);
        }
    }, [checkedUserId]);

    const handleChangeUser = (newUser) => {
        const resultArr = [...users].map(item => {
            if (newUser.id === item.id ) {
                return newUser
            }
            return item;
        })
        setUsers(resultArr)
        setCheckedUserId(null)
        setShowModal(false)
    }


    const handleSearchUsers = (e) => {
        let result = users.filter((user => {
            let eTargetValue = e.target.value.toLowerCase();
            let userNameIncludes = user.name.toLowerCase().includes(eTargetValue);
            return userNameIncludes;
        }));
        setfiltredUsers(result);
        console.log(result);
    }

    return (
        <>
            <Search
                onChange={handleSearchUsers}>
                Search
            </Search>
            <div className="container">

                <div className="holder-cards">
                    {filtredUsers.map(user => {
                        return <UserCard
                            user={user}
                            key={user.name + user.id}
                            handleSetId={handleSetId}
                        />
                    })}
                </div>
            </div>
            <Modal {...{ showModal, setShowModal }} setId={setCheckedUserId}>
                {typeOfModal == 'info' && <UserModal 
                                            user={user} />}
                {typeOfModal == 'edit' && <UserModalEdit 
                                            user={user}
                                            handleChangeUser={handleChangeUser}/>}
            </Modal>
        </>
    )
}

export default Users