import React, { useEffect, useState } from 'react';
import './App.css';
import 'normalize.css';
import Header from './components/Header';
import Users from './containers/Users';
import Albums from './containers/Albums';
import Photos from './containers/Photos';
import Create from './containers/Create';
import { Route, Switch } from 'react-router-dom';

import { getUsers } from './services/api';
import { getAlbums } from './services/api';
import { getPhotos } from './services/api';

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

const App = () => {

  const [users, setUsers] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    usersFromApi(setUsers);
    albumsFromApi(setAlbums);
    photosFromApi(setPhotos);
  }, [])

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" render={(props) => <Users {...props} users={users} setUsers={setUsers}/>} />
        <Route path="/users" render={(props) => <Users {...props} users={users} setUsers={setUsers}/>} />
        <Route path="/albums" render={(props) => <Albums {...props} albums={albums} setAlbums={setAlbums} />} />
        <Route path="/photos" render={(props) => <Photos {...props} photos={photos} setPhotos={setPhotos} />} />
        <Route path="/create" render={() => <Create />} />
      </Switch>
    </>
  );
}

export default App;
