import React, { useState, useEffect} from 'react';
import logo from './logo.svg';
import CustomUseEffect from './hooks/CustomUseEffect';
// import CustomUseEffect from './hooks/CustomUseEffect'
// import CustomUseEffect from './hooks/customUseEffect';
function App() {

  const [ count1 , setCount1 ] = useState( 0 ) ; 
  const [ count2 , setCount2 ] = useState( 0 ) ; 

  // useEffect(()=>{
  //   console.log("count 1 is " , count1 ) ; 
  // }  , [count1])

  // useEffect(()=>{
  //   console.log("count 2 is ", count2 ) ; 
  // } , [count2])
  CustomUseEffect(()=>{
    console.log("count1 increased -- " , count1 ) ;
  } , [count1])

  CustomUseEffect(()=>{
    console.log("count2 increased" , count2 ) ;
  } , [count2])

  useEffect(()=>{
    return ()=>{
      console.log(" it is a clean up functoin ")
    }
  } ,  [ count1 ])


  return (
    <div className='App'>
      <h1>React App</h1>
      <h2>{count1} , { count2} </h2>
      <button onClick={()=>setCount1(prev => prev+1 )} >Increase count 1 </button>
      <button onClick={()=>setCount2(prev => prev+1 )}>Increase count 2</button>
    </div>
  );
}

export default App;
