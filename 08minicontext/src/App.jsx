import React from 'react';
import Userconprovider from './context/Usercontextprov';
import './App.css';
import Login from './components/Login'; // Make sure the path is correct
import Profile from './components/Profile'; // Make sure the path is correct

function App() {
  return (
    <Userconprovider>
      <h1>React</h1>
      <Login />
      <Profile />
    </Userconprovider>
  );
}

export default App;
