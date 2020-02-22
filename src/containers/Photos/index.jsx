import React from 'react';
import './style.scss';
import Search from '../../components/Search';
import UserPhotos from '../../components/UserPhotos';

const Photos = ({ photos }) => {
    return (

        <div className="container">
            <div className="holder-cards">
                {photos.map(photo => {
                    return <UserPhotos
                        photo={photo}
                        key={photo.albumId + photo.id}
                    />
                })}
            </div>
        </div>

    )
}

export default Photos