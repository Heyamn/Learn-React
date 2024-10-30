import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Only import Routes and Route here
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import Profile from './components/DropdownPage/Profile';

function App() {
  return (
    <div>
      <Navbar /> {/* Navbar doesn't need to have BrowserRouter */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} /> {/* Profile page */}
      </Routes>
    </div>
  );
}

export default App;
