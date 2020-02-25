import React from 'react';
import './style.scss';

const UserAlbums = ({ album, handleSetId }) => {
    return (
        <>
            <div className="holder-user holder-albums">
                <div className="user-card albums">
                    <p><span>Name: </span> {album.title}</p>
                    <button onClick={() => handleSetId(album.id, "info")}>get info</button>
                    <button className="edit" onClick={() => handleSetId(album.id, "edit")}>Edit</button>
                </div>
            </div>
        </>
    )
}

export default UserAlbums