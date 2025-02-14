import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/suppliers/login', credentials);
            alert('Login successful!');
            navigate('/suppliers');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div>
            <h1>Supplier Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" value={credentials.email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" value={credentials.password} onChange={handleChange} required />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to="/register-supplier">Sign Up</Link></p>
        </div>
    );
}

export default Login;