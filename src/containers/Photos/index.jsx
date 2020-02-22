import React, {useState} from 'react';
import './style.scss';
import Search from '../../components/Search';
import UserPhotos from '../../components/UserPhotos';
import Pagination from '../../components/Pagination/Pagination';

const Photos = ({ photos }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
  
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPost = photos.slice(indexOfFirstPost, indexOfLastPost)

    return (
        <div className="container">
            <div className="holder-photos">
                {currentPost.map(photo => {
                    return <UserPhotos
                        photo={photo}
                        key={photo.albumId + photo.id}
                        currentPost={currentPost}
                    />
                })}
            </div>
            <Pagination 
                postsPerPage={postsPerPage} 
                totalPosts={photos.length} 
                paginate={paginate} />
        </div>
    )
}

export default Photos