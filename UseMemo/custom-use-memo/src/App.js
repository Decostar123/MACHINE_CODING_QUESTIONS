import logo from './logo.svg';
import './App.css';

import { useEffect , useMemo, useState} from 'react' ; 
import useCustomMemo from './hooks/use-custom-memo';
// some solutions are 
// 1) useRefn
// 2) parameter with a default value, telling varible changed ot not 


function App() {

  const [count , setCount] =  useState( 0 ) ;
  // console.log( count , "outside" ) ; 
  console.log( " count ////////////"  , count ) ; 

  // assume, this is an expensive calculaton   

  const [counter , setCounter] =  useState( 100 ) ;

  // THIS EXPENSIVE OPERATION WILL BE CALED AGAAIN, 
  // THIS WHOLE COMPONENT GOT REENDERD, AS THE STATE IS CHANGIG 

  // ASSUME THI  IS AN EXPENSIVE CACULATION
  const squaredValue = (  ) => {
    // alert(" got called again ")
      console.log( "int the squared value function  " , count  ) ; 
      return count*count ; 
    
  
  }

  // useMemo hook returs a value 
  // this is the memeozroin done here 
  const memoisedSquredValue = useCustomMemo(()=>{
    console.log("hi")
    return squaredValue() ; 
  } , [  count ] )

  useEffect(()=>{

  } , [] )  
  return (
  <>
    <div className='App'>
      <h1>Counter : {count} </h1>
      <h1>Squared Counter : {memoisedSquredValue} </h1>
      <button onClick={()=> setCount( prev => prev+1)}>Increment </button>
   </div>
   
  <div className='App'>
      <h1>Counter : {counter} </h1>
   
      <button onClick={()=> setCounter( prev => prev-1)}>Decrement </button>
   </div>
  </>


  );
}

export default App;
