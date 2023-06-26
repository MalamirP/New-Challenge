import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './LoginPage.css'

function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {

        fetch('http://188.166.21.103:4000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response data
                sessionStorage.setItem("token", data.token)
                if (data.token) {
                    navigate('/en');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        e.preventDefault();

    };


    return (
        <div className="container">
            <h2>Login</h2>
            <form onClick={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="text"
                    id="email"
                    name="email"
                    placeholder="Your email.."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />


                <label htmlFor="password">Password:</label>
                <input type="password"
                    id="password"
                    name="password"
                    placeholder="Your password.."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required

                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}


export default LoginPage;