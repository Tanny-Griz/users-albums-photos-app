import React, { useEffect, useState } from 'react';
import './style.scss';
import Search from '../../components/Search';
import UserPhotos from '../../components/UserPhotos';
import Modal from '../../components/ModalContainer';
import PhotoModal from '../../components/ModalContainer/PhotosModal';
import PhotoModalEdit from '../../components/ModalContainer/PhotosModal/PhotoModalEdit';
import { useReducer } from 'react';

const initialState = {
    photos: [],
    modal: {
        isShowModal: false,
        photo: {},
    }
}

const reducer = (state, action) => {
    // console.log(action.payload) - [5000]
    switch (action.type) {
        case "SET_PHOTOS":
            return {
                ...state,
                photos: action.payload,
            };
        case "SHOW_MODAL":
            return {
                ...state,
                modal: {
                    isShowModal: true,
                    photo: state.photos.find(p => p.id === action.payload)
                }
            }
        case "HIDE_MODAL":
            return {
                ...state,
                modal: {
                    isShowModal: false,
                    photo: null
                }
            };
        default:
            return state;
    }
}

const Photos = ({ photos, setPhotos }) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const [typeOfModal, setTypeOfModal] = useState('edit');
    const [filtredPhotos, setfiltredPhotos] = useState([]);

    useEffect(() => {
        dispatch({ type: "SET_PHOTOS", payload: photos })
    }, [photos]);

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

    const handleChangePhoto = (newPhoto) => {
        const resultArr = [...photos].map(item => {
            if (newPhoto.id === item.id) {
                return newPhoto
            }
            return item;
        })
        setPhotos(resultArr);
        handleHideModal();
    }

    useEffect(() => {
        setfiltredPhotos(photos);
    }, [photos]);

    const handleSearchPhotos = (e) => {
        let result = photos.filter((photo => {
            let eTargetValue = e.target.value.toLowerCase();
            let photosNameIncludes = photo.title.toLowerCase().includes(eTargetValue);
            return photosNameIncludes;
        }));
        setfiltredPhotos(result);
    }

    return (
        <>
            <Search onChange={handleSearchPhotos}>
                Search
            </Search>
            <div className="container">
                <div className="holder-photos">
                    {filtredPhotos.map(photo => {
                        return <UserPhotos
                            photo={photo}
                            key={photo.albumId + photo.id}
                            handleSetId={handleSetId}
                        />
                    })}
                </div>
            </div>
            <Modal isShowModal={state.modal.isShowModal}
                    handleHideModal={handleHideModal}>
                {typeOfModal == 'info' && 
                <PhotoModal photo={state.modal.photo} />}
                {typeOfModal == 'edit' && 
                <PhotoModalEdit photo={state.modal.photo}
                                handleChangePhoto={handleChangePhoto} />}
            </Modal>
        </>
    )
}

export default Photos