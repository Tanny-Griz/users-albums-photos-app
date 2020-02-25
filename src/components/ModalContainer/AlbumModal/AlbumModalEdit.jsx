import React, {useState} from 'react';

const AlbumModalEdit = ({ album, handleChangeAlbum }) => {
    const [editedAlbum, setEditedAlbum] = useState(album);
    return (
        <div className='user-card'>
            <h5>{editedAlbum.title}</h5>
            <p>Change title:</p>
            <input 
            type="text"
            value={editedAlbum.title}
            onChange={e => setEditedAlbum({...editedAlbum, title: e.target.value})}
            />
            <button onClick={() => handleChangeAlbum(editedAlbum)}>Save</button>
        </div>
    )
}

export default AlbumModalEdit;