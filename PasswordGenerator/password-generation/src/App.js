import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import usePasswordGenerator from './hooks/use-password-generator';
function App() {

  // Password text and copy button 
  // Characcter length 
  // Checkboxes 
  // Srength 
  // Generate Button

  const [length , setLength] = useState( 4) ;  
  const [checkBoxData , setCheckBoxData ] = useState(
    [ {title : 'Include UpperCase Letters' , state : false } 
  , {title : 'Include Lowercase Letters' , state : false } 
  , {title : 'Include Numbers' , state : false } 
  ,  {title : 'Include Symbols' , state : false } ]) ; 
  const [ copied , setCopied ] =useState( "Copy" ) ; 

const { password , errorMessage , generatePassword } = usePasswordGenerator() ;
  const handleCheckBoxChange = (ind)=>{
    const updatedCheckBoxData  = [...checkBoxData] ; 
    updatedCheckBoxData[ind].state = !updatedCheckBoxData[ind].state ; 
    setCheckBoxData( updatedCheckBoxData) ; 
  }
  function handleCopy(){
    // alert("copied") ; 
    navigator.clipboard.writeText( password ) ;
    setCopied("copied")
    setTimeout(()=>{
      setCopied("copy")
    } , 1000 )

  }
  return (
   <div className='container'>
   { password &&  <div className='header'>
        <div className='title'>{password}</div>
        <button className='copyBtn' onClick={()=>handleCopy()}>{copied}</button>
    </div>
    }
    
    <div className='charLength'>
      <span>
        <label>Character Length</label>
        <label>{length}</label>
      </span>
      <input type="range" min="4"  max="20"  value={length} onChange={(e)=>setLength(e.target.value)}    />
      </div>
     
      <div className='checkboxes'>
          {
            checkBoxData.map(( ele , ind ) => <div key={ind}>
              <input id={ind} type='checkbox' onChange={()=>handleCheckBoxChange(ind)} checked={ele.state}  />
              <label for={ind} >{ele.title}</label>
            </div>)
          }
      </div>
      {
      errorMessage && <div className='errorMessage'>{errorMessage}</div>
    }
    <button className='generateBtn' onClick={()=>{ generatePassword(checkBoxData , length )}}>Generate Password</button>
     
   </div>
  );
}

export default App;
