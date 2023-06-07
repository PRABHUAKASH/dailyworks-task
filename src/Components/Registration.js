import React, { useState } from 'react';
import './Registration.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const register = () => {
    dispatch({
      type: 'REGISTER',
      payload: {
        id: new Date().getTime(),
        name,
        email,
        password,
      },
    });
    navigate('/login');
  };
  return (
    <div>
      <div className="signup">
        <form className="signup_form">
          <h1>Signup Here</h1>
          <input
            type="name"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="button" value="Signup" onClick={register} />
        </form>
      </div>
    </div>
  );
};

export default Registration;
