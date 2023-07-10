import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ProfilePage() {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        const token = localStorage.getItem('token');


        if (token) {
            fetch(`http://localhost:4020/api/v1/users/profile/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            })
                .then((response) => {
                    if (response.status === 200) {
                        return response.json();
                    }
                })
                .then((data) => {
                    setProfile(data.profile);
                })
                .catch((err) => console.log(err));

        }
    }, []);

    return (
        <div className="card">
            <h2 className="welcome">Welcome, {profile.userName}</h2>
            <br />
            <div className="profilebody">
                <u><h2>Your Stats</h2></u>
                <h2><strong>UserName:</strong> <p>{profile.userName}</p></h2>
                <h2><strong>City:</strong> <p>{profile.city}</p></h2>
                <h2><strong>Starsign:</strong> <p>{profile.starsign}</p></h2>
            </div>
            <div className="profilelinks">
                <Link to='/new-sos'>New SOS</Link>{' '}
                <Link to='/new-fit'>New Fit</Link>{' '}

            </div>
        </div>
    );
}

export default ProfilePage;