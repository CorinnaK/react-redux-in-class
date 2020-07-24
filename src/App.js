import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import HelloYourName from './HelloYourName'
import HelloStudents from './HelloStudents'
function App() {
  return (
    <div className="App">
      <Hello/>
      <HelloYourName name="Shivani" favFood="pizza"/>
      <HelloYourName name="Ashutosh" favFood="noodles"/>
      <HelloStudents />
    </div>
  );
}

export default App;
