import React from 'react'
import { useState , useEffect } from 'react'
import "../style/grid.css"
import Box from './Box'
const Grid = () => {

    const [ boxArray , setBoxArray] = useState( new Array(9).fill( false ) ) ; 
    const [ boxPattern, setBoxPattern] = useState([]) ;

    useEffect(()=>{
        console.log( boxPattern.length )
        if( boxPattern.length === 8 ){  

            removeAllBoxes() ; 

        }
    } , [ boxPattern]) ; 

    // can also use setInterval in place of setTimeOut + recursio :) 
    // also with setInterval need to clear the evalue only once 
    function removeAllBoxes( ){

        console.log( "11111")
        console.log( boxPattern.length)
        if( boxPattern.length === 0 ) return ; 

        let timer = setTimeout( ( ) =>{
            
            console.log( "2222")
        let arrBoxPat = boxPattern ; 
        let ind = arrBoxPat.pop()  ;

        let arrBox = boxArray ; 
        arrBox[ind] = false   ; 

        setBoxPattern([...arrBoxPat]) ; 
        setBoxArray([...arrBox]) ; 

        clearTimeout( timer ) ; 
            removeAllBoxes()  ;
        } , 300 ) ; 

        
    }
  return (
    <div className='outer'>
        <div  className='inner'>
            {
                boxArray.map(( ele , ind ) => <Box key={ind} checked={ele} position={ind} setBoxArray={setBoxArray} setBoxPattern={setBoxPattern}/>)
            }

        </div>
    </div>
  )
}

export default Grid