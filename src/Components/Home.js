import React, { useEffect, useState } from 'react';
import './components.css'
import User from './User';
import Header from './Header';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('users.json')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div className='home-container p-8 '>
            <Header></Header>
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Home;