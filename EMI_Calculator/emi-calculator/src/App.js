import logo from './logo.svg';
import './App.css';
import InputRange from './components/InputRange';
import Tenure from './components/Tenure';
import { useState , useEffect} from 'react';
import useCalculator from './hooks/useCalculator';
function App() {

  const [cost , setCost] = useState("") ; 
  const [rate , setRate] = useState("") ; 
  const [fees , setFees] = useState("") ; 
  const [downPayment , setDownPayment] = useState(0)  ; 
  const [time , setTime] = useState(0)  ; 
  const [ tag , setTag  ] = useState("") ; 

  const [loanPayment , setLoanPayment] = useState(0)  ; 
  const { calculation } = useCalculator() ;

  useEffect(()=>{
    if( tag === 'loanPayment' ) return  ; 
    //  alert("hi")
    calculation( loanPayment, downPayment, cost, rate ,time, 'downPayment' , setDownPayment, setLoanPayment ) ; 
  } , [ downPayment , cost, rate, fees, time ] )

  useEffect(()=>{
    // alert("loan payment chnages ")/
    if( tag === 'downPayment' ) return  ; 
   
    calculation( loanPayment, downPayment, cost, rate ,time, 'loanPayment' , setDownPayment, setLoanPayment ) ; 
  } , [ loanPayment , cost, rate, fees, time] )
  
  return (
   <div className='outer'>
    <h1>EMI CALCULATOR</h1>
    <div className='inputBoxes'>
      <p>Total Cost of Asset</p>
      <input type="number" value={cost} onChange={(e)=>setCost(Number(e.target.value))} />
    </div>
    <div className='inputBoxes'>
      <p>Interest Rate (in %)</p>
      <input type="number"  value={rate} onChange={(e)=>setRate(Number(e.target.value))}/>
    </div>
    <div className='inputBoxes'>
      <p>Processing Fees (in %)</p>
      <input type="number"  value={fees} onChange={(e)=>setFees(Number(e.target.value))} />
    </div>
    <div className='inputBoxes'>
      <p> Down Payment</p>
    </div>

    <div className='price'>
      <p className='payments'>Total Down Payment - ₹{downPayment}</p>
      <InputRange payment={downPayment}  setPayment={setDownPayment} cost={cost} fees={fees} showFees={false} setTag={setTag} />
    </div>
    <div className='inputBoxes'>
      <p> Loan Per Month</p>
    </div>
    <div className='price'>
      <p className='payments'>Total Loan Amount - ₹{loanPayment}</p>
      <InputRange payment={loanPayment}  setPayment={setLoanPayment} cost={cost} fees={fees} showFees={true} setTag={setTag}/>
    </div>
    <Tenure setTime={setTime} time={time}/>
   </div>
  );
}

export default App;
