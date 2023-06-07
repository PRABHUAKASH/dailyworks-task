import React, { useState } from 'react';
import './Registration.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const navigate = useNavigate();

  const login = () => {
    const payload = users.find(
      (user) => user.email === email && user.password === password
    );
    if (payload) {
      dispatch({
        type: 'LOGIN',
        payload,
      });
      alert('Successfully LoggedIN');
      navigate('/data');
    } else {
      alert('Wrong Credential!!!');
    }
  };
  return (
    <div>
      <div className="signup">
        <form className="signup_form">
          <h1>Login Here</h1>

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
          <input type="button" value="Login" onClick={login} />
        </form>
      </div>
    </div>
  );
};

export default Login;
