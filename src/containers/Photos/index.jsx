import React, { useEffect, useState } from 'react';
import './style.scss';
import Search from '../../components/Search';
import UserPhotos from '../../components/UserPhotos';
import Modal from '../../components/ModalContainer';
import PhotoModal from '../../components/ModalContainer/PhotosModal';

const Photos = ({ photos }) => {

    // modal
    const [checkedPhotosId, setCheckedPhotosId] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [photo, setPhoto] = useState({});

    const handleSetId = id => setCheckedPhotosId(id);

    // search
    const [filtredPhotos, setfiltredPhotos] = useState([]);

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
                <PhotoModal photo={photo} />
            </Modal>
        </>
    )
}

export default Photos