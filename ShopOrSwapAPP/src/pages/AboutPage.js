import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="card">
            <h1>About Page</h1>
            <p className="about">Do you miss going out and showing out?<br />
            Do you keep catching the ban hammer on Instagram?<br />
            Too old for tiktok?<br />
            We got you.<br />
            Here at S.wapO.rS.hop we're providing a platform for you to show off all that stuff you've been ordering from amazon since the panny began.<br />
            Are you ALSO tired of lining Bezos pockets and/or bumping into maskless influencers at the mall?<br />
            We've got a solve for that, too.<br />
            Trade each other thrift gems or line each others pockets instead!<br />
            Raid each others closets, show off your quarantine body, help each other pay rent.<br />
            Thats S.wapO.rS.hop.<br />
            <Link to='/signup'><button>Start Here</button></Link>{' '}
            </p>
        </div>
    )
};

export default About;