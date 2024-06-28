import React , { useRef , useEffect} from 'react'
// what is the contract 
// 2 inputs , callback function and a dependency array 
// output is the result, with or without computation 


// 1) NO NEED OF STORING THE FUNCTION
// 2) MAKE FUNCTION FOR THE ARRAY NOT EQUAL -> IT WILL COMPARE THE LENGTH + THE VALUES -> SO THAT WE CAN COMBINE THE  FUNCTION 
// 3) I COULS HAVE ALSO USED USEeFFECT, BUT NOTE, NORMAL FUNCTINS PREVENT THE USE OF USEEFFECT 
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



const useCustomMemo = ( cb , depd ) => {
    // a varinble or a state where we can stoe the cached value 
    // we ompare changes in the dependency 
    // cleanup logic as well 
    // return the emoized value 
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