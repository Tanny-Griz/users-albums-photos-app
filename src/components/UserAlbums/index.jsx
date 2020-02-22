import React from 'react';
import './style.scss';

const UserAlbums = ({ album }) => {
    return (
        <>
            <div className="holder-user holder-albums">
                <div className="user-card albums">
                    <p><span>Name: </span> {album.title}</p>
                </div>
            </div>
        </>
    )
}

export default UserAlbums