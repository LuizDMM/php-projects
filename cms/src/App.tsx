import React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <main className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
