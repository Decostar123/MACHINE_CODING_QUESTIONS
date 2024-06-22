import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import useLRUCache from './hooks/useLRUCache';
function App() {

  const [ content , setContent] = useState([]) ;
  
  const { get , put } =useLRUCache(3)  ;

  const lodContent = async ( id )=>{
    await new Promise( ( res , rej )=>{
      
      setTimeout(()=>{
        res( id ) ; 
      } , 2000 )
    } )

    

    const lodedContent = { id , 
      text : `Tab ${id} Data`
    }
    put( id , lodedContent ) ; 
    setContent( prev =>[...prev , lodedContent])

  }

  const habdleButtonCLick = ( id )=>{
     const cachedContent = get(id) ; 

     console.log( cachedContent )
     if( cachedContent  ){
      console.log( cachedContent ) ; 
        setContent( prev => [...prev , cachedContent ])
     }else{
      lodContent( id )
     }
  }
  return (
    <div className='outer'>
      <h1>Dynamic Content Loader with LRU Cache</h1>
      <div className='inner'>
      <button onClick={()=>habdleButtonCLick(1)}  >Tab 1</button>
      <button  onClick={()=>habdleButtonCLick(2)}  >Tab 2</button>
      <button  onClick={()=>habdleButtonCLick(3)} >Tab 3</button>
      <button  onClick={()=>habdleButtonCLick(4)} >Tab 4</button>
      <button  onClick={()=>habdleButtonCLick(5)}  > Tab 5</button>
      </div>
      
      <div className='content'>
        <h3>Loaded Cntenet</h3>
        <ul>
          { content.map(( ele , ind ) => <li key={`${ele.id}${ind}`}>{ele.text}</li>)}

        </ul>
      </div>
    </div>
  );
}

export default App;
