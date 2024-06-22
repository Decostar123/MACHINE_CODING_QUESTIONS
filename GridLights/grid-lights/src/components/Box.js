import React from 'react'
import "../style/box.css"
const Box = ({checked  , position , setBoxArray , setBoxPattern }) => {
    function toggleTheBox(){
        
        setBoxArray( ( prev )=>{
            // alert("hi")  
            let arr = prev ; 
            console.log( arr   ) ; 
            arr[position] = !arr[position] ;
            return [...arr] ; 

        })
        setBoxPattern(( prev)=>{
            let arr = prev; 
            let ind = arr.findIndex(( ele ) => ele === position ) ;
            // in psh ou push destructure could have been used easily 
            if( ind === -1 ) arr.push( position ) ; 

            else arr.splice( ind , 1 )  ; 
            setBoxPattern([...arr] ) ; 
            console.log( arr  ) ; 
        })

    }
  return (
    <div className="outerBox" style={{ backgroundColor: checked ? "green" : ""  ,  visibility: position===4 ? 'hidden':'' }} onClick={()=> toggleTheBox()}>

    </div>
  )
}

export default Box