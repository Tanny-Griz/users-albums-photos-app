import React from 'react';
import './style.scss';

const UserPhotos = ({ photo, handleSetId }) => {
    return (
        <>
        <div className="photos">
            <div className="item-photo">
                <p><span>Name: </span> {photo.title}</p>
                <p><a href={photo.url}>Url: {photo.url}</a></p>
                <button onClick={() => handleSetId(photo.id)}>get info</button>
            </div>
        </div>
        </>
    )
}

export default UserPhotos