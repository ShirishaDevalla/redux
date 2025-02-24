import React, { useState } from 'react';
import Inputfield from '../component/Inputfield';
import Button from '../component/Button';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { loginFailure, loginSuccess } from '../redux/Actions';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailOnChange = (event) => {
    setEmail(event.target.value);
  };

  const passwordOnChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    
    
    if (email === 'test@gmail.com' && password === 'Test@123') {
      dispatch(loginSuccess());
      toast.success('Login successful!');
    } else {
      dispatch(loginFailure());
      toast.error('Invalid credentials!');
    }
  };

  return (
    <React.Fragment>
      <div className="login-container">
        <div className="login-form">
          <h2 className='login'>Login Form</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label className='input-label'>Username</label>
              <Inputfield className='input-label'
                inputType="text" 
                name="email" 
                value={email}  
                placeholder="Enter your email Address" 
                onChange={emailOnChange} 
              />
            </div>

            <div className="form-group">
              <label className='input-label'>Password</label>
              <Inputfield className='input-label'
                inputType="password" 
                name="password" 
                value={password}  
                placeholder="Enter password" 
                onChange={passwordOnChange} 
              />
            </div>

            <div className="form-group">
              <Button btnName="Login" onClick={handleLogin} />
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
