import React from 'react';
import './style.scss';
import Search from '../../components/Search';
import UserAlbums from '../../components/UserAlbums';

const Albums = ({ albums }) => {
    return (
        <section className="albums">
            <Search
                title="Search albums"
                placeholder="Enter albums..."
                onChange={(value) => console.log(value)}
            />
            <main>
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
            </main>
        </section>
    )
}

export default Albums