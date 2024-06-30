import React from 'react'
import"../css/body.css" ; 
import { useState , useEffect} from "react" ;
import JobList from './JobList';
const  Body =  () => {

    const [ totalItems,setTotalItems] = useState( 0 );
    const [ currentItem  ,setCurrentItem ] = useState( 1  ) ;
    const [ listItems , setListItems ]  = useState([]) ; 
    const [ fetchingData , setFetchingData ] = useState(false ) ; 
    
    useEffect(()=>{
        async function getJobItems(){
            
              
            try{
                setFetchingData( true ) ; 
                let arr = await fetch("https://hacker-news.firebaseio.com/v0/jobstories.json") ; 
                let result = await arr.json() ; 
                
                setTotalItems( result.length ) ; 
                result = result.filter( ( _ , ind ) => ( ind + 1 ) <= 6*currentItem ) ; 
                setListItems( result)  ; 
                setFetchingData( false ) ; 


            }catch(err){
                setTotalItems(0); 
                setFetchingData( false ) ; 
                return [] 
            }
        }; 
        getJobItems() ;  
    } , [currentItem] )
    

    
    


  return (
    <div className='outer'>
        <h1 className='outer__heading'>Hacker News Job Board</h1>
        <div className="outer__joblist" role="list">
            {
                listItems && listItems.map(( ele ) =>  <JobList key={ele} jobid={ele}/> )
            }
           
        </div>
        {
            ( 6*currentItem < totalItems || totalItems === 0) &&  <button  disabled={fetchingData?true : false } className='ovuter__morejobs' onClick={()=>setCurrentItem( prev => prev+1 )}>{ fetchingData ? 'Loading jobs ....' : 'Load More Jobs' }</button>
        }
       
    </div>
  )
}

export default Body