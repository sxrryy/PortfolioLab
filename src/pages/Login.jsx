import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        const errors = {};
        if (!email.includes('@')) {
            errors.email = 'Podany email jest nieprawidłowy!';
        }
        if (password.length < 6) {
            errors.password = 'Podane hasło jest za krótkie!';
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log('Logged in');
        }
    };

    return (
        <div className="max-w-md mx-auto p-6">
            <h2 className="text-2xl mb-5 mt-10 text-center">Zaloguj się</h2><div className="flex justify-center m-3">
            <img className="mb-10" src="../assets/Decoration.svg"></img>
          </div>
            <div className="bg-gray-200 border p-6">
                <form id="loginForm" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input 
                            type="text" 
                            className="mt-1 block w-full p-2 border-b-2 bg-gray-200 border-gray-600 sm:text-sm"
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Hasło</label>
                        <input 
                            type="password" 
                            className="mt-1 block w-full p-2 bg-gray-200 border-b-2 border-gray-600 sm:text-sm"
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
                    </div>
                </form>
            </div>
            <div className="mt-4 flex justify-between">
                <Link to="/register" className="w-1/2 mr-2 py-2 px-4 bg-white text-black border border-solid border-black hover:bg-gray-300 text-center">Załóż konto</Link>
                <button 
                    type="submit" 
                    form="loginForm" 
                    className="w-1/2 ml-2 py-2 px-4 bg-white text-black border border-solid border-black hover:bg-gray-300 text-center"
                >
                    Zaloguj się
                </button>
            </div>
        </div>
    );
};

export default Login;
