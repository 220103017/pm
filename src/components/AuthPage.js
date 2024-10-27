import React, { useState } from 'react';

function AuthPage({ authType, onClose }) {
  const [isSignUp, setIsSignUp] = useState(authType === 'register');

  const handleAuthSwitch = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="auth-container">
      <div className={`auth-box-wrapper ${isSignUp ? 'sign-up-active' : ''}`}>
        {isSignUp ? (
          <>
            <div className="auth-box sign-up-container">
              <h2>Hello, Friend!</h2>
              <p>If you already have an account</p>
              <button className="switch-link" onClick={handleAuthSwitch}>Sign In</button>
            </div>
            <div className="auth-box sign-in-container">
              <h2>Sign Up</h2>
              <p>Register with your personal details</p>
              <div className="auth-form">
                <div className="form-content">
                  <input type="text" placeholder="Enter your name..." />
                  <input type="email" placeholder="Enter your email..." />
                  <input type="password" placeholder="Enter your password..." />
                  <button>Sign Up</button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="auth-box sign-in-container">
              <h2>Sign In</h2>
              <p>Enter your email and password to sign in.</p>
              <div className="auth-form">
                <div className="form-content">
                  <input type="email" placeholder="Enter your email..." />
                  <input type="password" placeholder="Enter your password..." />
                  <a href="#" className="forgot-password">Forgot Your Password?</a>
                  <button>Sign In</button>
                </div>
              </div>
            </div>
            <div className="auth-box sign-up-container">
              <h2>Hello, Friend!</h2>
              <p>Register with your personal details</p>
              <button className="switch-link" onClick={handleAuthSwitch}>Sign Up</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AuthPage;
