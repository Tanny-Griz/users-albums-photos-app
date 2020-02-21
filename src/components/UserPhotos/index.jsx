import React from 'react';
import './style.scss';

const UserPhotos = ({ photo }) => {
    return (
        <>
            <div className="holder-user">
                <div className="user-card">
                    <p>Name: {photo.title}</p>
                    <p>Url: {photo.url}</p>
                </div>
            </div>
        </>
    )
}

export default UserPhotos