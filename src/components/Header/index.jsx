import React from 'react';
import './style.scss';
import '../Button/Button'
import Button from '../Button/Button';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="holder-button">
                <Button><Link to="/users">Users</Link></Button>
                <Button><Link to="/photos">Photos</Link></Button>
                <Button><Link to="/albums">Albums</Link></Button>
            </div>
        </header>
    )
}

export default Header