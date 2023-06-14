import React, { useEffect, useState } from 'react';
import { auth, provider } from './config';
import { signInWithPopup } from 'firebase/auth';
import App from '../App';
import Navigation from '../components/Navbar';

export default function Login() {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const [email, setEmail] = useState('');

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      const userEmail = data.user.email;
      setEmail(userEmail);
      localStorage.setItem('email', userEmail);
    });
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    setEmail(storedEmail);
  }, []);

  const welcomeMessage = email ? `Welcome, ${email}` : '';

  return (
    <>
      <div className='welcome'>
        <p>{welcomeMessage}</p>
      </div>
      <div>
        {email ? (
          <>
            <button
              className='login-btn'
              onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <button
            className='login-btn'
            onClick={handleClick}>
            Login
          </button>
        )}
      </div>
    </>
  );
}
