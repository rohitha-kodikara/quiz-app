import { useState } from 'react'
import Question from './Question'
import { getRandomQuestionIndexes } from '../../utils/getRandomQuestionIndexes'



const QuestionList = ({ questions }) => {
  //controll the current question index
  const[currentIndex, setCurrentIndex] = useState(0);
   //track the user's selected option
    const [selectedOption, setSelectedOption] = useState(null);

    //track user's answers as object
     const [userAnswers, setUserAnswers] = useState([]);

 //handle the next question
 function handleNextQuestion(){
    if (currentIndex < questions.length - 1) {
    setCurrentIndex((index) => index + 1)
  }
  //reset the selected option when moving to the next question
  setSelectedOption(null); 
  
  //store user selection with correctness in the userAnswers state
   setUserAnswers((prev) => [
  ...prev.filter((answer) => answer.questionId !== currentQuestion.id),
  {
    questionId: currentQuestion.id,
    selectedOption,
    isCorrect: selectedOption === currentQuestion.correctOption,
  },
]);

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

  const correctAnswers = userAnswers.filter(
  (answer) => answer.isCorrect
).length;

 
function handleReset(){
  setCurrentIndex(0);
  setSelectedOption(null);
  setUserAnswers([]);
}

  

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
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            correctAnswers={correctAnswers}
            handleReset={handleReset}
            />
          ) 
       }
       
     </div>
    
  )
}

export default QuestionList
