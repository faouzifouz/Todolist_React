import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Todoinput from './components/Todoinput'

function App() {
  return (
    <div className="App">
     <div className="todo-wrapper">
       <Header />
       <Todoinput />
     </div>
    </div>
  );
}

export default App;
