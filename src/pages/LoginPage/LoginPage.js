import { useState, useEffect } from 'react';

import './LoginPage.css'

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

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
                console.log(data, `sessionStorage set with token value: ${data.token}`)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
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
                />


                <label htmlFor="password">Password:</label>
                <input type="password"
                    id="password"
                    name="password"
                    placeholder="Your password.."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}


export default LoginPage;