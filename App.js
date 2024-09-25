import React from 'react';
import RandomColor from './RandomColor/RandomColor'; 
import TodoApp from './TodoList/index';
import './App.css'
import ImageFind from './ImageList/ImageFind';

function App() {
  return (
    <div className='container'>
        <div className='TodoApp'><TodoApp /></div>
        <div className='RandomColor'><RandomColor /></div>
        <div className='ImageFind'><ImageFind /></div>
    </div>
  );
};
export default App