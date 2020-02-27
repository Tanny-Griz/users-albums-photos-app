import React from 'react';
import './style.scss';

const CreatedComponent = ({ arrayUsPhAl, setArrayUsPhAl }) => {
    return (
        <div className="cards">
            {arrayUsPhAl.map(obj => {
                const generateKey = 'UserCard' + Math.random();
                if (obj.name) {
                    return <UserCard {...obj}
                        key={generateKey}
                        setArrayUsPhAl={setArrayUsPhAl} />
                }
                if (obj.title) {
                    return (
                        <PhotoCard {...obj}
                            key={generateKey}
                            setArrayUsPhAl={setArrayUsPhAl} />
                    )
                }
            })}
        </div>
    )
}

const UserCard = (props) => {
    const { name, surname, phone, email, city, company, website } = props;

    return (
        <div className="hold-card">
            <div className="card">
                {name == true}
                <h3>Name: {name} {surname}</h3>
                <p>Email: {email || 'не указано'}</p>
                <p>Phone: {phone || 'не указано'}</p>
                <p>City: {city || 'не указано'}</p>
                <p>Company: {company || 'не указано'}</p>
                <p>Website: {website || 'не указано'}</p>
            </div>
        </div>
    )
}

const PhotoCard = (props) => {
    const { title, url } = props;

    return (
        <div className="hold-card">
            <div className="card">
                <h3>Title: {title}</h3>
                <p>Url: {url}</p>
            </div>
        </div>
    )
}

export default CreatedComponent