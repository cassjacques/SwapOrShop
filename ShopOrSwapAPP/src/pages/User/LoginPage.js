import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function LoginPage({ setToken }) {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    function handleSubmit(event) {
        event.preventDefault();

        if (!email || !password ) {
            return setError('All fields are required');
        }

        const userData = { email, password };

        fetch('http://localhost:4020/api/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                }
                return setError(response.statusText);
            })
            .then((data) => {
                setToken(data.token);
                localStorage.setItem('token', data.token);
                history.push('/profile');
            })
            .catch((err) => setError(err.message));
    }

    return (
        <div className="card sheet login">
            <h2>Login</h2>
            {error && <h2>{error}</h2>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Ex: jdoe@gmail.com"
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
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default LoginPage;