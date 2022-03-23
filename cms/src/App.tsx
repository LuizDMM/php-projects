import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <main className="App">
      <Navbar />
      <Outlet />
    </main>
  );
}

export default App;
