import React, { useEffect, useState } from 'react';
import './style.scss';
import Search from '../../components/Search';
import UserPhotos from '../../components/UserPhotos';
import Modal from '../../components/ModalContainer';
import PhotoModal from '../../components/ModalContainer/PhotosModal';
import PhotoModalEdit from '../../components/ModalContainer/PhotosModal/PhotoModalEdit';

const Photos = ({ photos, setPhotos }) => {

    // modal
    const [checkedPhotosId, setCheckedPhotosId] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [typeOfModal, setTypeOfModal] = useState('edit');
    const [photo, setPhoto] = useState({});

    // search
    const [filtredPhotos, setfiltredPhotos] = useState([]);

    const handleSetId = (id, type) => {
        setTypeOfModal(type);
        setCheckedPhotosId(id);
    }

    useEffect(() => {
        setfiltredPhotos(photos);
    }, [photos]);

    useEffect(() => {
        if (checkedPhotosId !== null && photos.length) {
            const photo = photos.find(p => p.id === checkedPhotosId);
            setPhoto(photo);
            setShowModal(true);
        }
    }, [checkedPhotosId]);

    const handleChangePhoto = (newPhoto) => {
        const resultArr = [...photos].map(item => {
            if (newPhoto.id === item.id ) {
                return newPhoto
            }
            return item;
        })
        setPhotos(resultArr);
        setCheckedPhotosId(null);
        setShowModal(false);
    }

    const handleSearchPhotos = (e) => {
        let result = photos.filter((photo => {
            let eTargetValue = e.target.value.toLowerCase();
            let photosNameIncludes = photo.title.toLowerCase().includes(eTargetValue);
            return photosNameIncludes;
        }));
        console.log(result);
        setfiltredPhotos(result);
        
    }

    return (
        <>
            <Search
                onChange={handleSearchPhotos}>
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
            <Modal {...{showModal, setShowModal}} setId={setCheckedPhotosId}>
                {typeOfModal == 'info' && <PhotoModal 
                                            photo={photo} />}
                {typeOfModal == 'edit' && <PhotoModalEdit 
                                            photo={photo} 
                                            handleChangePhoto={handleChangePhoto} />}
            </Modal>
        </>
    )
}

export default Photos