import React from 'react';
import './style.scss';
import '../Button/Button'
import Button from '../Button/Button';

const Header = () => {
    return (
        <header>
            <div className="holder-button">
                <Button id="userBtn">Users</Button>
                <Button id="albumsBtn">albumsBtn</Button>
                <Button id="photosBtn">Photos</Button>
            </div>
        </header>
    )
}

export default Header