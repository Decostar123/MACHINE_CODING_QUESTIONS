import React , { useEffect, useState} from 'react'
import QuestionData from "../Data.json" ; 
import type { QuestionType} from "../types"
import ExactQuestion from './ExactQuestion';
import App from '../App';
const QuestionList = () => {

    const [ questionList , setQuestionList] = useState<QuestionType[]>([]) ; 
    const [ currentQuestion, setCurrentQuestion]  = useState(0) ; 
    const [ totalQuestion, setToalQuestion] = useState(0) ; 

    const [ currentAnswerCount , setCurrentAnswerCount ] = useState(0)

    useEffect(()=>{
        setQuestionList( QuestionData ) ;
        setToalQuestion( QuestionData.length) 
      }
       , [ ])

       if( questionList.length === 0 ) return <></>

       if( currentQuestion === totalQuestion){
        return <p className='result'>You answered {currentAnswerCount} correct questions  out of {totalQuestion}</p>
       }
  return (
    <div className='questionList'>
       <ExactQuestion exactQuestion={questionList[currentQuestion]} setCurrentQuestion={setCurrentQuestion}
        setCurrentAnswerCount={setCurrentAnswerCount} />
    </div>
  )
}

export default QuestionList