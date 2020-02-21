import React from 'react';
import './style.scss';

const UserAlbums = ({ album }) => {
    return (
        <>
            <div className="holder-user">
                <div className="user-card">
                    <p>Name: {album.title}</p>
                </div>
            </div>
        </>
    )
}

export default UserAlbums