import React from 'react';
import './style.scss';
import Search from '../../components/Search';
import UserPhotos from '../../components/UserPhotos';

const Photos = ({ photos }) => {
    return (
        <section className="photos">
            <Search
                title="Search photos"
                placeholder="Enter photos..."
                onChange={(value) => console.log(value)}
            />
            <main>
                <div className="container">
                    <div className="holder-cards">
                        {photos.map(photo => {
                            return <UserPhotos
                                photo={photo}
                                key={photos.userId + photos.id}
                            />
                        })}
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Photos