
import React, { useState } from 'react';
import { Link } from 'react-router';
import './Home_Task.css';

function Login_Task({ onLogin }) {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setError('');

    const cleanEmail = email.trim().toLowerCase();
    let users = [];

    try {
      users = JSON.parse(
        localStorage.getItem('demoUsers') || '[]'
      );
    } catch {
      users = [];
    }

    if (isSignup) {
      if (!name.trim()) {
        setError('Please enter your name.');
        return;
      }

      if (password.length < 6) {
        setError('Password must contain at least 6 characters.');
        return;
      }

      if (users.some(u => u.email === cleanEmail)) {
        setError('Email already registered. Please login.');
        return;
      }

      const newUser = {
        name: name.trim(),
        email: cleanEmail,
        password: password
      };

      users.push(newUser);

      localStorage.setItem(
        'demoUsers',
        JSON.stringify(users)
      );

      if (typeof onLogin !== 'function') {
        setError(
          'Login setup error. Check Home_Task.jsx route.'
        );
        return;
      }

      onLogin(newUser);
      return;
    }

    const foundUser = users.find(
      u =>
        u.email === cleanEmail &&
        u.password === password
    );

    if (!foundUser) {
      setError('Invalid email or password.');
      return;
    }

    if (typeof onLogin !== 'function') {
      setError(
        'Login setup error. Check Home_Task.jsx route.'
      );
      return;
    }

    onLogin(foundUser);
  }

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h1>
          {isSignup ? 'Create Account' : 'Welcome Back'}
        </h1>

        <p>
          {isSignup
            ? 'Create your demo account.'
            : 'Login to continue.'}
        </p>

        {isSignup && (
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        )}

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password (minimum 6 characters)"
          value={password}
          onChange={e => setPassword(e.target.value)}
          minLength={6}
          required
        />

        {error && (
          <p className="auth-error">{error}</p>
        )}

        <button type="submit" className="primary-btn">
          {isSignup ? 'Sign Up' : 'Login'}
        </button>

        <p>
          {isSignup
            ? 'Already have an account? '
            : "Don't have an account? "}

          <button
            type="button"
            className="text-btn"
            onClick={() => {
              setIsSignup(!isSignup);
              setError('');
            }}
          >
            {isSignup ? 'Login' : 'Sign Up'}
          </button>
        </p>

        <Link to="/">Back to Home</Link>
      </form>
    </div>
  );
}

export default Login_Task;
