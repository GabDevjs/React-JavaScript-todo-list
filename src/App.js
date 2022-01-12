import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-app">
        <div className='ball'></div>
        <div className='ball2'></div>
        <TodoList/>
    </div>
  );
}

export default App;