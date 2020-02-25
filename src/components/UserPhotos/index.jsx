import React from 'react';
import './style.scss';

const UserPhotos = ({ photo, handleSetId }) => {
    return (
        <>
            <div className="photos">
                <div className="item-photo">
                    <p><span>Title: </span> {photo.title}</p>
                    <p><a href={photo.url}>Url: {photo.url}</a></p>
                    <div className="btn-group">
                        <button onClick={() => handleSetId(photo.id, 'info')}>get info</button>
                        <button className="edit" onClick={() => handleSetId(photo.id, 'edit')}>Edit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserPhotos