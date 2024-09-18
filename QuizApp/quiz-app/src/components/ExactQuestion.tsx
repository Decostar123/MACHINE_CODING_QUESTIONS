import React from 'react'
import type { QuestionType } from '../types'
import "../App"
const ExactQuestion = (  { exactQuestion , setCurrentQuestion,setCurrentAnswerCount } : { exactQuestion:QuestionType , setCurrentQuestion:React.Dispatch<React.SetStateAction<number>>
    setCurrentAnswerCount:React.Dispatch<React.SetStateAction<number>>
}) => { 

        console.log( exactQuestion )
        function evaluateOption(ans:string){

            if( ans === exactQuestion.answer){
                setCurrentAnswerCount(prev => prev+1)
            }
            
            setCurrentQuestion(prev => prev+1)
        }
  return (
    <div className='exactQuestion' >
        <p >{exactQuestion.question}</p>
        <ul>
            {
                exactQuestion.option.map(( ele , ind )=>{
                    return <li key={ind} onClick={()=>evaluateOption(ele)} >{ele}</li>
                })
            }
        </ul>
    </div>
  )
}

export default ExactQuestion