import React from 'react';
import { Link } from 'react-router-dom';
//import CSS from '../App.css';


const HomePage = () => {
    return (
        <div className="logo">
            <h1>S.wap O.r S.hop</h1>
            <div className="homelinks">
                <Link to='/signin'>SignIn</Link>{' '}
                <Link to='/about'>About</Link>{' '}
                <Link to='/signup'>SignUp</Link>{' '}
            </div>
        </div>
    )
};

export default HomePage;