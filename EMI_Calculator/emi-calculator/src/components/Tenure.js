import React from 'react'
import "../css/tenure.css"
import { useState } from 'react'
const Tenure = ({setTime , time }) => {
    let [ timeArr , setTimeArr] = useState([12,24,36,48,60])
  return (
    <div className='tenureDiv'>
        <p>Tenure</p>
        <div className='innerTenureDiv'>
           { timeArr.map((ele)=> <button style={{backgroundColor: time===ele ? 'rgb( 100,100,100) ':''}} onClick={()=>{  setTime(ele)}} key={ele}>{ele}</button>)
           }
        </div>
    </div>
  )
}

export default Tenure