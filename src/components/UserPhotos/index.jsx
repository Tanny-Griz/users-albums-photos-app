import React from 'react';
import './style.scss';

const UserPhotos = ({ photo }) => {
    return (
        <div className="photos">
            <div className="item-photo">
                <p><span>Name: </span> {photo.title}</p>
                <a href={photo.url}>Url: {photo.url}</a>
            </div>
        </div>
    )
}

export default UserPhotos