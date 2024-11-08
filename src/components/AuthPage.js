import React, { useState, useEffect } from 'react';

function AuthPage({ authType, onClose, onAuthSuccess }) {
  const [isSignUp, setIsSignUp] = useState(authType === 'register');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setIsSignUp(authType === 'register');
  }, [authType]);

  const handleAuthSwitch = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSignUp = () => {
    console.log('User signed up');
    onAuthSuccess();
  };

  const handleSignIn = () => {
    console.log('User signed in');
    onAuthSuccess();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Введите пароль"
                  />
                  <div className="checkbox-wrapper">
                    <input
                      type="checkbox"
                      id="show-password"
                      checked={showPassword}
                      onChange={togglePasswordVisibility}
                    />
                    <label htmlFor="show-password">Показать пароль</label>
                  </div>
                  <button onClick={handleSignUp}>Sign Up</button>
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
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Введите пароль"
                  />
                  <div className="checkbox-wrapper">
                    <input
                      type="checkbox"
                      id="show-password"
                      checked={showPassword}
                      onChange={togglePasswordVisibility}
                    />
                    <label htmlFor="show-password">Показать пароль</label>
                  </div>
                  <a href="#" className="forgot-password">Forgot Your Password?</a>
                  <button onClick={handleSignIn}>Sign In</button>
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
