import React, { useEffect, useState } from 'react';
import './style.scss';
import Search from '../../components/Search';
import UserAlbums from '../../components/UserAlbums';
import Modal from '../../components/ModalContainer';
import AlbumModal from '../../components/ModalContainer/AlbumModal';
import AlbumModalEdit from '../../components/ModalContainer/AlbumModal/AlbumModalEdit';


const Albums = ({ albums, setAlbums }) => {
    // modal
    const [checkedAlbumsId, setCheckedAlbumsId] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [typeOfModal, setTypeOfModal] = useState('edit');
    const [album, setAlbum] = useState({});

    const [filtredAlbums, setfiltredAlbums] = useState([]);

    const handleSetId = (id, type) => {
        setTypeOfModal(type);
        setCheckedAlbumsId(id);
    } 

    useEffect(() => {
        setfiltredAlbums(albums);
    }, [albums]);

    useEffect(() => {
        if (checkedAlbumsId !== null && albums.length) {
            const album = albums.find(a => a.id === checkedAlbumsId);
            setAlbum(album);
            setShowModal(true);
        }
    }, [checkedAlbumsId]);

    const handleChangeAlbum = (newAlbum) => {
        const resultArr = [...albums].map(item => {
            if (newAlbum.id === item.id ) {
                return newAlbum
            }
            return item;
        })
        console.log('saveee')
        setAlbums(resultArr);
        setCheckedAlbumsId(null);
        setShowModal(false);
    }

    const handleSearchAlbums = (e) => {
        let result = albums.filter((albums => {
            let eTargetValue = e.target.value.toLowerCase();
            let albumsNameIncludes = albums.title.toLowerCase().includes(eTargetValue);
            return albumsNameIncludes;
        }));
        setfiltredAlbums(result);
        console.log(result);
    }

    return (
        <>
            <Search
                onChange={handleSearchAlbums}>
                Search
            </Search>
            <div className="container">
                <div className="holder-cards">
                    {filtredAlbums.map(album => {
                        return <UserAlbums
                            album={album}
                            key={album.userId + album.id}
                            handleSetId={handleSetId}
                        />
                    })}
                </div>
            </div>
            <Modal {...{showModal, setShowModal}} setId={setCheckedAlbumsId}>
                {typeOfModal == "info" && <AlbumModal 
                                            album={album} />}
                {typeOfModal == "edit" && <AlbumModalEdit 
                                            album={album} 
                                            handleChangeAlbum={handleChangeAlbum} />}
            </Modal>
        </>
    )
}

export default Albums