import React  , {  useState} from 'react'

const useCalculator = () => {
    // const [ downPayment , setDownPayment] = useState( 0 )  ; 

    const [ anount , setAmount] = useState( 0 )  ; 

    function calculation(  loanAmount, downPayment , asset, rate, time , typeOfPayment, setDownPayment, setLoanPayment ){
       
        

        console.log( typeOfPayment)

        if( typeOfPayment==='downPayment' ){

            if( !asset || !rate || !time || !downPayment){
              setLoanPayment( 0 ) ; 
              return ; 

            }

            let p = asset - downPayment ; 
            let amount = ( p * ( rate/100 ) * Math.pow( 1 + (rate/100) , time )  ) /  ( ( Math.pow( 1+ (rate/100) , time    ) -1 ) ) ; 


            amount = amount / time ; 
            // amount  = amount - downPayment ; 

            // amount = Math.floor( anount / time ) ; 
            amount= amount.toFixed(0)

            setLoanPayment( amount ) ; 

            console.log( "mthe amount  is " , amount ); 

            


        }else{
          if( !asset || !rate || !time ||  !loanAmount ){
            setDownPayment( 0 ) ; 
            return; 
          }
          // let amount = ( asset*( rate/100 ) *Math.pow( 1 + (rate/100) , time )  ) / ( Math.pow( 1+ (rate/100) , time -1  ) ) ; 
          let amount = asset - loanAmount*time  ;
          // amount = Math.floor( amount ) ; 
              // let totalLoanAmount  = loanAmount*time ; 
              // let totalDownPayment = amount - totalLoanAmount ; 
              setDownPayment( amount ) ; 
        }
    }
  return { calculation }
}

export default useCalculator