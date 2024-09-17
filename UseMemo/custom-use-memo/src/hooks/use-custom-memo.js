import React , { useRef , useEffect} from 'react'
// what is the contract 
// 2 inputs , callback function and a dependency array 
// output is the result, with or without computation 


// 1) NO NEED OF STORING THE FUNCTION, ( yeah actualy, because if the value changed, call the function which we get by input  ) 
// 2) MAKE FUNCTION FOR THE ARRAY NOT EQUAL -> IT WILL COMPARE THE LENGTH + THE VALUES -> SO THAT WE CAN COMBINE THE  FUNCTION 
// 3) I COULS HAVE ALSO USED USEeFFECT, BUT NOTE, NORMAL FUNCTINS PREVENT THE USE OF USEEFFECT 
// WRONG, I THINK THE ABOV POINT IS NOT CORRECT, 
// IF I USE FUNCTION AS DEPNDENCY, THEN EVERY TIME CALL A NEW cb IS ACTUALLY PASSED 
// const useCustomMemo = (cb, deps) => {
//   const ref = useRef({ deps, value: cb() });

//   useEffect(() => {
//     if (!areDepsEqual(ref.current.deps, deps)) {
//       ref.current = { deps, value: cb() };
//     }
//   }, [cb, deps]);

//   return ref.current.value;
// };
// 4) THE BENIFT OF THE CALLBACK FUNCTION IS NO NEED TO RAKE CARE OF NUMBER OF PARAMETERS, JUST CALL WITH NO PARRAMETERS
// IT IS DIRECT AND SWEET 







// Should You Use useState or useRef?
// If your memoized value affects rendering and you need to re-render the component
//  when the cached value or dependencies change, then you should use useState.

// If the memoized value does not need to trigger a re-render and is purely used for
//  internal computation or caching, useRef is a better fit.


const useCustomMemo = ( cb , depd ) => {
    // a variable or a state where we can store the cached value 
    // we compare changes in the dependency 
    // cleanup logic as well 
    // return the memoized value 
    const ref = useRef( null ) ; 

    useEffect(()=>{
      ref.current = null ; 
    } , [])

    function getResult(){
      console.log( ref.current )  ;
        if( !ref.current || ref.current.depd.length !== depd.length  ){
          // let cbfunc =   cb() ;

          ref.current = {
            func : cb , 
            depd , 
            ans : cb() 
          }

          console.log( " console.log( ref.current.ans ) 1111111 ; " ,  ref.current.ans ) ; 
          return ref.current.ans ; 
        }

       
        let changed = false  ; 
        for( let i =  0 ; i < ref.current.depd.length ; i++ ){
          if( ref.current.depd[i] !== depd[i] ){
              changed = true   ; break; 
          }
        }
        if(  !changed ){
          console.log( " console.log( ref.current.ans ) 22222222 ; " ,  ref.current.ans ) ; 
          return ref.current.ans ; 
        }
        // if the dependency have chnaged, then there is no need no have the same call back function again, but chalta h 
        ref.current.func = cb ; 
        ref.current.depd = depd   ; 
    
        let result =  ref.current.func() 

        ref.current.ans = result ; 
        console.log( " console.log( ref.current.ans ) 333333   ; " ,  result , depd[0] ) ; 

        return result ; 




    }
  
    return getResult() ; 
}

export default useCustomMemo