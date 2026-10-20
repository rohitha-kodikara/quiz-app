import { useState } from 'react'
import confetti from 'canvas-confetti'
import { RotateCcw } from 'lucide-react';

const Question = ({ 
  question, 
  handleNextQuestion,
  handlePreviousQuestion, 
  alternativeIndexes, 
  currentIndex,
  handleSetCurrentIndex,
  questionLength,
  selectedOption,
  setSelectedOption,
  correctAnswers,
  handleReset,
}) => {



    function handleOptionSelect(optionIndex) {
      setSelectedOption(optionIndex);
       if (optionIndex === question.correctOption) {
        //adding confetti animation when the selected option is correct
    confetti({
      particleCount: 120,
      spread: 100,
      origin: {
        y: 0.6,
      },
    })

  }

    }

  
    
//calculate the percentage of correct answers
const percentageCorrect =
  questionLength > 0 ? (correctAnswers / questionLength) * 100 : 0;

  return (
     <div className="bg-slate-900 rounded-2xl p-8 shadow-inner sm:p-10 lg:p-12">
     {/* show confetti animation when selected option is correct */}

     <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden"></div>
     <div className="mb-12 flex items-start gap-4">
      <div className="flex-1">
        <div className="h-4 overflow-hidden rounded-full bg-amber-100">
          <div className="h-full  rounded-full bg-green-600" style={{ width: `${percentageCorrect}%` }} />
        </div>
        <div  className="mt-3 flex items-center justify-between gap-4 font-semibold text-white">
          <span>Question {currentIndex + 1} / 15</span>
          <span>{Math.round(percentageCorrect)}  / 100 % points</span>
        </div>
      </div>

        <button
          type="button"
          onClick={handleReset}
          className="h-12 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-stone-200 px-4 text-lg font-semibold text-slate-900 transition-colors hover:bg-amber-200 hover:text-black"
        >
          <RotateCcw aria-hidden="true" className="size-5" />
          Reset All
        </button>
      </div>

      <div className="mb-7 flex items-center gap-4 text-left">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white text-xl font-bold text-black">
          {question.id}
        </span>
        <h2 className="text-2xl font-bold leading-tight text-white sm:text-2xl">
          {question.question}
        </h2>
      </div>

      <ul className="space-y-4">
        {question.options.map((option,optionIndex) => (
          <li
  onClick={() => handleOptionSelect(optionIndex)}
  key={`${question.id}-${optionIndex}`}
  className={`flex w-full items-center justify-between gap-4 ${
    //is the option selected? 
    // if yes, is it correct or incorrect? 
    // if not, show default styling
    selectedOption === optionIndex
      ? optionIndex === question.correctOption
        ? 'bg-green-700 text-white'
        : 'bg-red-600 text-white'
      : 'bg-white text-black'
  } cursor-pointer rounded-full px-7 py-3 text-left text-xl transition-colors sm:text-2xl`}
>
  <span>{option}</span>

  {selectedOption === optionIndex && (
    <span className="flex shrink-0 items-center gap-2 text-base font-semibold">
      {optionIndex === question.correctOption ? (
        <>
          <span>Correct</span>
        </>
      ) : (
        <span>Incorrect</span>
      )}
    </span>
  )}
</li>
        ))}
        
      </ul>

      <div className="mt-8 flex items-center justify-between gap-4">
        {currentIndex > 0 && (
          <button
            type="button"
            onClick={handlePreviousQuestion}
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-white px-5 py-3 text-lg font-semibold text-slate-900 transition-colors hover:bg-blue-600 hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Previous
          </button>
        )}
        

        <div className="flex items-center gap-2">
        {alternativeIndexes.map((index) => (
           currentIndex > 0 && (
              <button
            type="button"
            onClick={() => handleSetCurrentIndex(index)}
            key={index}
            className="cursor-pointer rounded-xl bg-white px-4 py-3 text-lg font-semibold text-slate-900 transition-colors hover:bg-blue-600 hover:text-white"
          >
            {index + 1}
          </button> 
           )
          ))}
         
        </div>

      
             <button
         type="button"
        onClick={handleNextQuestion}
         className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-lg font-semibold text-white transition-colors hover:bg-blue-600"
        >
         Next
         <svg
           aria-hidden="true"
           className="size-5"
           fill="none"
           stroke="currentColor"
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth="2"
           viewBox="0 0 24 24"
         >
           <path d="m9 18 6-6-6-6" />
         </svg>
        </button>
           
       
      </div>
    
     </div>
  )
}

export default Question
