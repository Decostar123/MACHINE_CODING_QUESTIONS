import logo from './logo.svg';
import './App.css';
import { useState , useEffect  , useRef } from 'react';
// ASSUME THAT THIS onCOMPLETE FUNCTION IS GIVEN  SOME OUTOPUT  AND NOW I JUST HAVE TO USE THSI FUNCTION 
// FOR MY USE , I HAVE PROPVIDED THE DEFUALT VLUE HERE ON THE DDESTRUTURE ON THE FLY THING 

// I CAN SEE LIKE I GIVE IT INPUT AS THE CURRENT WIDTH, AND IF THE WIDTH IS === 100 ,
//  IT RETURN SUCCESS OR RETURN LOADING ... ; 

// like the function is coming from outside and i am just using it here 
function App({ onComplete=()=>{} }) {
  const [ width , setWidth ] = useState(0) ;
  const widthRef = useRef(0) 

  useEffect(()=>{

    let timer = setInterval(()=>{
    
      console.log( width )

      setWidth( prev => {
        if(prev === 100 ){
          clearInterval( timer) ; 
          return 100 ; 
        }else{
          return prev+1 ; 
        }
      } ) 
    } , 50 )

    return ()=>clearInterval( timer ) ; 
  } , [ ])
  return (

    <div className="App">
   
     <div className="outer">
        <div className="inner widthStyle" ref={widthRef}>

        </div>
        <label className='widthLabel' style={{color : width>=48?'white':'black'}}>{width}%</label>
     </div>
    </div>
  );
}

export default App;
