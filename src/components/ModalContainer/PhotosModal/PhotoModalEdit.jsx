import React, {useState} from 'react';

const PhotoModalEdit = ({ photo, handleChangePhoto }) => {
    const [editedPhoto, setEditedPhoto] = useState(photo);
    return (
        <div className='user-card photos'>
            <p>Change title:</p>
            <input 
            type="text"
            value={editedPhoto.title}
            onChange={e => setEditedPhoto({...editedPhoto, title: e.target.value})}
            />
            <p>Change url:</p>
            <input 
            type="text"
            value={editedPhoto.url}
            onChange={e => setEditedPhoto({...editedPhoto, url: e.target.value})}
            />
            <button onClick={() => handleChangePhoto(editedPhoto)}>Save</button>
        </div>
    )
}

export default PhotoModalEdit;