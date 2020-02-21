import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Users from './containers/Users';
import Albums from './containers/Albums';
import Photos from './containers/Photos';

import { getUsers } from './services/api';
import { getAlbums } from './services/api';
import { getPhotos } from './services/api';

//---------------------------
const usersFromApi = async (setter) => {
  const users = await getUsers();
  setter(users);
}

const albumsFromApi = async (setter) => {
  const albums = await getAlbums();
  setter(albums);
}

const photosFromApi = async (setter) => {
  const photos = await getPhotos();
  setter(photos);
}
//--------------------------
const App = () => {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    usersFromApi(setUsers);
  }, [])

  useEffect(() => {
    albumsFromApi(setAlbums);
  }, [])

  useEffect(() => {
    photosFromApi(setPhotos);
  }, [])

  return (
    <>
      <Header />
      <Users users={users} />
      <Albums albums={albums} />
      <Photos photos={photos}/>
    </>
  );
}

export default App;
