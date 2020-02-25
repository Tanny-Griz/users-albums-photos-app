import React from 'react';

const PhotoModal = ({ photo }) => {
    return (
        <div className='user-card'>
            <h3>Title: {photo.title}</h3>
            <p>Url: <a href={photo.url}>{photo.url}</a></p>
        </div>
    )
}

export default PhotoModal