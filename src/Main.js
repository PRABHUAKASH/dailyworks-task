import React from 'react';
import App from './App';
import { Routes, Route } from 'react-router-dom';
import Registration from './Components/Registration';
import Login from './Components/Login';

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/data" element={<App />} />
      </Routes>
    </div>
  );
};

export default Main;
