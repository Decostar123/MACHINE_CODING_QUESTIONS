import React , { useEffect, useState  } from 'react';
import logo from './logo.svg';
import QuestionList from './components/QuestionList';
import './App.css';

  
function App() {
 

 
  return (
   <div className='outer'>
    <h1>World Quiz</h1>
    <QuestionList />
   </div>
  );
}

export default App;
