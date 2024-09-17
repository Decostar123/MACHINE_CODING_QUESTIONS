import React , { useEffect, useRef } from 'react'

const CustomUseEffect = (   cb:()=>any , dependency:any[] ) => {
    
    const arraysAreEqual  = (arr1:any[], arr2:any[]):boolean=>{  
        // console.log(arr1, arr2 )
        if( !arr1 || !arr2 ) return false ; 
        if( arr1.length !== arr2.length ) return false ; 
       for( let i = 0 ;  i < arr1.length ; i++ ){
        if( arr1[i] !== arr2[i] ) return false ; 
       }
        return true  ;  
    }

    // CAN GIVE SOME INITIA VALUE,  ( EMPTY ARRAY ) IN PLACE OF MAKING IT EMPTY         
    const refVarible : any = useRef( ) ; 
    // the value of useRef persisit even after rerender 
    if( !dependency){
        const cleanupfunction = cb( ) ; 
        if( cleanupfunction && typeof(cleanupfunction) === 'function') cleanupfunction() ; 
    }else if( !arraysAreEqual(refVarible.current , dependency ) ){
        refVarible.current = dependency ; 
        const cleanupfunction = cb( ) ; 
        if( cleanupfunction && typeof(cleanupfunction) === 'function') cleanupfunction() ; 
    }
    return <></>
}

export default CustomUseEffect ; 