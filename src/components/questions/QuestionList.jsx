import { useReducer, useState } from 'react'
import Question from './Question'
import { getRandomQuestionIndexes } from '../../utils/getRandomQuestionIndexes'

const initialState = {
  currentIndex: 0,
}

function reducer(state, action) {
  switch (action.type) {
    case 'next_question':
      // the reducer must be pure, so the max comes in via the action
      return {
        ...state,
        currentIndex: Math.min(state.currentIndex + 1, action.payload - 1),
      }

    case 'previous_question':
      return {
        ...state,
        currentIndex: Math.max(state.currentIndex - 1, 0),
      }

    case 'set_current_index':
      return { ...state, currentIndex: action.payload }

    case 'reset':
      return initialState

    default:
      return state
  }
}

const QuestionList = ({ questions }) => {
    //controll the current question index
   // const[currentIndex, setCurrentIndex] = useState(0);
   //track the user's selected option
    const [selectedOption, setSelectedOption] = useState(null);

  //track user's answers as object
  const [userAnswers, setUserAnswers] = useState([]);



    const[state, dispatch] = useReducer(reducer,initialState);
    

 //handle the next question
 function handleNextQuestion(){
      dispatch({ type: 'next_question', payload: questions.length })
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
   dispatch({ type: 'previous_question' })
   
 }

 //get the current question based on the current index
 const currentQuestion = questions[state.currentIndex];

 //get the random question indexes.
  const alternativeIndexes = questions.length
    ? getRandomQuestionIndexes(state.currentIndex, questions.length)
    : []

  //pass the question length to controll next button visibility
  const questionLength = questions.length 

  const correctAnswers = userAnswers.filter(
  (answer) => answer.isCorrect
).length;

 
function handleReset(){
  dispatch({ type: 'reset' });
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
            handleSetCurrentIndex={(index) => dispatch({ type: 'set_current_index', payload: index })}
            currentIndex={state.currentIndex}
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
