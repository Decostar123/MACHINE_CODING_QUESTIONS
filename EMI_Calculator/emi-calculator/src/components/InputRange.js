import React from 'react'
import "../css/inputRange.css"
const InputRange = ({payment  , setPayment , cost , fees, showFees , setTag} ) => {
  return (
    <div className='inputRange'>
        <input type="range" value={payment} onChange={e => { 
          setPayment(Number(e.target.value)) ; 
          let val = showFees ?  'loanPayment' : 'downPayment'  ;

          setTag(val)
          
        }  } max={cost} />
        <div className='values'>  
            <label>0%</label>
            <label>₹ {payment}</label>
            <label>{ showFees ? Math.round( ( payment*(100+fees) / 100) ,  0 ) : "100%" }</label>
        
        </div>
    </div>
  )
}

export default InputRange