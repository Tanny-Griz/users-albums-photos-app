import React, { useEffect, useState } from 'react';
import './style.scss';
import Search from '../../components/Search';
import UserAlbums from '../../components/UserAlbums';
import Modal from '../../components/ModalContainer';
import AlbumModal from '../../components/ModalContainer/AlbumModal';
import AlbumModalEdit from '../../components/ModalContainer/AlbumModal/AlbumModalEdit';
import { useReducer } from 'react';

const initialState = {
    albums: [],
    modal: {
        isShowModal: false,
        albums: {},
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_ALBUMS":
            return {
                ...state,
                albums: action.payload,
            };
        case "SHOW_MODAL":
            return {
                ...state,
                modal: {
                    isShowModal: true,
                    album: state.albums.find(a => a.id === action.payload)
                }
            };
        case "HIDE_MODAL":
            return {
                ...state,
                modal: {
                    isShowModal: false,
                    album: null
                }
            };
        default:
            return state;
    }
}

const Albums = ({ albums, setAlbums }) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const [typeOfModal, setTypeOfModal] = useState('edit');
    const [filtredAlbums, setfiltredAlbums] = useState([]);

    useEffect(() => {
        dispatch({ type: "SET_ALBUMS", payload: albums })
    }, [albums]);

    const handleShowModal = (id) => {
        dispatch({ type: "SHOW_MODAL", payload: id })
    }

    const handleHideModal = () => {
        dispatch({ type: "HIDE_MODAL" })
    }

    const handleSetId = (id, type) => {
        handleShowModal(id);
        setTypeOfModal(type);
    }

    const handleChangeAlbum = (newAlbum) => {
        const resultArr = [...albums].map(item => {
            if (newAlbum.id === item.id) {
                return newAlbum
            }
            return item;
        })
        setAlbums(resultArr);
        handleHideModal();
    }

    useEffect(() => {
        setfiltredAlbums(albums);
    }, [albums]);

    console.log(albums)

    const handleSearchAlbums = (e) => {
        let result = albums.filter((albums => {
            let eTargetValue = e.target.value.toLowerCase();
            let albumsNameIncludes = albums.title.toLowerCase().includes(eTargetValue);
            return albumsNameIncludes;
        }));
        setfiltredAlbums(result);
        console.log(result);
    }

    return (
        <>
            <Search
                onChange={handleSearchAlbums}>
                Search
            </Search>
            <div className="container">
                <div className="holder-cards">
                    {filtredAlbums.map(album => {
                        return <UserAlbums
                            album={album}
                            key={album.userId + album.id}
                            handleSetId={handleSetId}
                        />
                    })}
                </div>
            </div>
            <Modal isShowModal={state.modal.isShowModal}
                    handleHideModal={handleHideModal}>
                {typeOfModal == "info" && 
                <AlbumModal album={state.modal.album} />}
                {typeOfModal == "edit" && 
                <AlbumModalEdit album={state.modal.album}
                                handleChangeAlbum={handleChangeAlbum} />}
            </Modal>
        </>
    )
}

export default Albums