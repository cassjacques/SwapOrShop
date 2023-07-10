import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function SignupPage() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [userName, setUserName] = useState('');
    const [city, setCity] = useState('');
    const [starsign, setStarsign] = useState('');
    const [error, setError] = useState(null);

    function handleSubmit(event) {
        event.preventDefault();

        if (!email || !password || !password2 || !userName || !city || !starsign) {
            return setError('All fields are required');
        }

        if (password !== password2) {
            return setError('Passwords do not match');
        }

        const newUser = { email, password, userName, city, starsign };

        fetch('http://localhost:4020/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                }
                setError(response.statusText);
            })
            .then((data) => {
                history.push('/login');
            })
            .catch((err) => setError(err.message))
    }

    return (
        <div className="card sheet signup">
            <h2>Signup</h2>
            {error && <h2>{error}</h2>}
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="name">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="DoeJ@gmail.com"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="name">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="***********"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="name">Confirm Password</label>
                    <input
                        type="password"
                        id="password2"
                        name="password2"
                        placeholder="***********"
                        value={password2}
                        onChange={(event) => setPassword2(event.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="name">UserName</label>
                    <input
                        type="text"
                        id="userName"
                        name="userName"
                        placeholder="XjaneXdoeX"
                        value={userName}
                        onChange={(event) => setUserName(event.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="name">City</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="Chicago"
                        value={city}
                        onChange={(event) => setCity(event.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="name">Starsign</label>
                    <input
                        type="text"
                        id="starsign"
                        name="starsign"
                        placeholder="Chicago"
                        value={starsign}
                        onChange={(event) => setStarsign(event.target.value)}
                    />
                </div>
             
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default SignupPage;
