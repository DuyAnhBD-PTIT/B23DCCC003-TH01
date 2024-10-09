import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Changed Switch to Routes
import RandomColor from './RandomColor/RandomColor'; 
import TodoApp from './TodoList/index';
import './App.css';
import ImageFind from './ImageList/ImageFind';

function App() {
  return (
    <Router>
      <div className='container'>
        {/* Navigation Links */}
        <nav>
          <ul>
            <li><Link to="/">Todo App</Link></li>
            <li><Link to="/random-color">Random Color</Link></li>
            <li><Link to="/image-find">Image Find</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<TodoApp />} />
          <Route path="/random-color" element={<RandomColor />} />
          <Route path="/image-find" element={<ImageFind />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
