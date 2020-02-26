import React, { useEffect, useState } from 'react';
import './style.scss';
import UserCard from '../../components/UserCard';
import Search from '../../components/Search';
import Modal from '../../components/ModalContainer';
import UserModal from '../../components/ModalContainer/UserModal';
import UserModalEdit from '../../components/ModalContainer/UserModal/UserModalEdit';
import { useReducer } from 'react';

const initialState = {
    users: [],
    modal: {
        isShowModal: false,
        user: {},
    }
}

const reducer = (state, action) => {
    // action обьект
    // dispatch({type: "PROP"})
    switch (action.type) {
        case "SET_USERS":
            return {
                ...state,
                users: action.payload,
            };
        case "SHOW_MODAL":
            return {
                ...state,
                modal: {
                    isShowModal: true,
                    user: state.users.find(u => u.id === action.payload)
                }
            };
        case "HIDE_MODAL":
            return {
                ...state,
                modal: {
                    isShowModal: false,
                    user: null
                }
            };
        default:
            return state;
    }
}

const Users = ({ users, setUsers }) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const [typeOfModal, setTypeOfModal] = useState('edit');
    const [filtredUsers, setfiltredUsers] = useState([]);

    useEffect(() => {
        // кажд раз при изменен users запис сост-е users
        dispatch({ type: "SET_USERS", payload: users })
    }, [users])

    const handleShowModal = (id) => {
        dispatch({ type: "SHOW_MODAL", payload: id })
    }

    const handleHideModal = () => {
        dispatch({ type: "HIDE_MODAL" })
    }

    const handleSetId = (id, type) => {
        handleShowModal(id);
        setTypeOfModal(type);
    };

    const handleChangeUser = (newUser) => {
            const resultArr = [...users].map(item => {
                if (newUser.id === item.id ) {
                    return newUser
                }
                return item;
            })
            setUsers(resultArr);
            handleHideModal();
        }

    useEffect(() => {
        setfiltredUsers(users);
    }, [users]);

    const handleSearchUsers = (e) => {
        let result = users.filter((user => {
            let eTargetValue = e.target.value.toLowerCase();
            let userNameIncludes = user.name.toLowerCase().includes(eTargetValue);
            return userNameIncludes;
        }));
        setfiltredUsers(result);
    }

    return (
        <>
            <Search onChange={handleSearchUsers}>>
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
            <Modal isShowModal={state.modal.isShowModal}
                    handleHideModal={handleHideModal} >
                {typeOfModal == 'info' && 
                <UserModal user={state.modal.user} />}
                {typeOfModal == 'edit' &&
                <UserModalEdit user={state.modal.user} 
                               handleChangeUser={handleChangeUser} />}
            </Modal>
        </>
    )
}

export default Users