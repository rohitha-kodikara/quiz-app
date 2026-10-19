import { useState } from 'react'
import Question from './Question'
import { getRandomQuestionIndexes } from '../../utils/getRandomQuestionIndexes'



const QuestionList = ({ questions }) => {
  //controll the current question index
  const[currentIndex, setCurrentIndex] = useState(0)


 //handle the next question
 function handleNextQuestion(){
    if (currentIndex < questions.length - 1) {
    setCurrentIndex((index) => index + 1)
  }
 }

 //handle the previous question
 function handlePreviousQuestion(){
   if(currentIndex > 0){
     setCurrentIndex((index) => index - 1)
   }
   
 }

 //get the current question based on the current index
 const currentQuestion = questions[currentIndex];

 //get the random question indexes.
  const alternativeIndexes = questions.length
    ? getRandomQuestionIndexes(currentIndex, questions.length)
    : []

  //pass the question length to controll next button visibility
  const questionLength = questions.length


  return (
  
     <div className="w-2/3 rounded-2xl  p-8 shadow-inner sm:p-10 lg:p-12">
       {
     
     currentQuestion && (
           <Question 
            key={currentQuestion.id} 
            question={currentQuestion}
            handleNextQuestion={handleNextQuestion}
            handlePreviousQuestion={handlePreviousQuestion}
            alternativeIndexes={alternativeIndexes}
            setCurrentIndex={setCurrentIndex}
            currentIndex={currentIndex}
            questionLength={questionLength}
            />
          ) 
       }
       
     </div>
    
  )
}

export default QuestionList
