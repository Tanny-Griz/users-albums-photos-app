import React, { useEffect, useState } from 'react';
import './style.scss';
import Search from '../../components/Search';
import UserAlbums from '../../components/UserAlbums';



const Albums = ({ albums }) => {
    return (
        <div className="container">
            <div className="holder-cards">
                {albums.map(album => {
                    return <UserAlbums
                        album={album}
                        key={album.userId + album.id}
                    />
                })}
            </div>
        </div>
    )
}

export default Albums