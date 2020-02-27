import React from 'react';
import { getArrFromStorage } from '../../services/localStorageServices';
import { setToLocalStorage } from '../../services/localStorageServices';
import { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button/Button';
import CreatedComponent from '../../components/CreatedComponent';
import './style.scss';


const Create = () => {

    const arrayOfFromLS = getArrFromStorage();

    const [arrayUsPhAl, setArrayUsPhAl] = useState(arrayOfFromLS);

    const [formUser, setFormUser] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        city: '',
        company: '',
        email: '',
        website: ''
    })

    const [formPhoto, setFormPhoto] = useState({
        title: '',
        url: '',
    })

    const handleChange = e => {
        const { name, value } = e.target;
        const newFormUser = { ...formUser, [name]: value };
        const newFormPhoto = { ...formPhoto, [name]: value };
        setFormUser(newFormUser);
        setFormPhoto(newFormPhoto);
    }

    // если данные не ввели, что б не записывался пустой массив - не работает
    const handleCreateUser = () => {
        if (formUser === '' ) {
            return false
        }
        else {
            let arr = [...arrayUsPhAl, formUser];
            setArrayUsPhAl(arr);

            setToLocalStorage(arr);

            setFormUser({
                name: '',
                surname: '',
                email: '',
                phone: '',
                city: '',
                company: '',
                website: ''
            })
        }
    }

    const handleCreatePhoto = () => {
        let arr = [...arrayUsPhAl, formPhoto];
        setArrayUsPhAl(arr);

        setToLocalStorage(arr);

        setFormPhoto({
            title: '',
            url: '',
        })
    }

    return (
        <div className="container">
            <div className="content">
                <div className="form-group">
                    <div className="hold-create-form">
                        <h3>Create Users</h3>
                        <div className="form">
                            <p>Введите имя:</p>
                            <Input type="text"
                                value={formUser.name}
                                onChange={handleChange}
                                name="name"
                                placeholder="name" />

                            <p>Введите фамилию:</p>
                            <Input type="text"
                                value={formUser.surname}
                                onChange={handleChange}
                                name="surname"
                                placeholder="surname" />

                            <p>Введите email:</p>
                            <Input type="text"
                                value={formUser.email}
                                onChange={handleChange}
                                name="email"
                                placeholder="email"
                            />

                            <p>Введите phone:</p>
                            <Input type="text"
                                value={formUser.phone}
                                onChange={handleChange}
                                name="phone"
                                placeholder="phone"
                            />

                            <p>Введите city:</p>
                            <Input type="text"
                                value={formUser.city}
                                onChange={handleChange}
                                name="city"
                                placeholder="city"
                            />

                            <p>Введите company:</p>
                            <Input type="text"
                                value={formUser.company}
                                onChange={handleChange}
                                name="company"
                                placeholder="company"
                            />

                            <p>Введите website:</p>
                            <Input type="text"
                                value={formUser.website}
                                onChange={handleChange}
                                name="website"
                                placeholder="website"
                            />
                            <p><Button className="btn" onClick={() => {
                                handleCreateUser();
                            }}>Create User</Button></p>
                        </div>
                    </div>
                    <div className="hold-create-form">
                        <h3>Create Photos</h3>
                        <p>Введите title:</p>
                        <Input type="text"
                            value={formPhoto.title}
                            onChange={handleChange}
                            name="title"
                            placeholder="title" />
                        <p>Введите title:</p>
                        <Input type="text"
                            value={formPhoto.url}
                            onChange={handleChange}
                            name="url"
                            placeholder="url" />
                        <p><Button className="btn" onClick={() => {
                            handleCreatePhoto();
                        }}>Create Photo</Button></p>

                    </div>
                </div>
                <CreatedComponent arrayUsPhAl={arrayUsPhAl}
                    setArrayUsPhAl={setArrayUsPhAl}
                    key={Math.random()} />

            </div>

        </div>
    )
}

export default Create