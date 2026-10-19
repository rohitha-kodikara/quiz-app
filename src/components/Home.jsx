import QuestionList from './questions/QuestionList'
import ContentBox from '../ContentBox'
import { Brain } from 'lucide-react'

const Home = ({ questions, quizLength, setQuestionList, questionList }) => {
 
 

  return (
   <>
    {
      questionList ? (
        <QuestionList questions={questions} />
      ):(
        <ContentBox>
        <div
          className="mx-auto mb-12 flex size-31.5 items-center justify-center rounded-full bg-blue-600 text-[54px] text-white shadow-[0_14px_28px_rgba(0,0,0,0.3)]"
        >
          <Brain aria-hidden="true" className="size-16" strokeWidth={2.25} />
        </div>
        <h1
          className="mb-5 text-[clamp(32px,5vw,42px)] leading-[1.15] text-orange-950"
        >
          Welcome to QuizBuddy
        </h1>
        <p
          className="mb-4 text-[clamp(18px,3vw,25px)] leading-[1.4] text-orange-900"
        >
          Test your knowledge, one question at a time
        </p>
        <p
          className="mb-14 text-lg text-orange-800/80"
        >
          {quizLength} questions, no time limit
        </p>
        {
          quizLength === 0 ? (
            <button
              type="button"
              disabled
              className="rounded-4xl bg-orange-400 p-5 text-2xl font-bold text-white shadow-[0_12px_24px_rgba(0,0,0,0.3)]"
            >
              No questions available
            </button>
          ) : (
          <button
          type="button"
          onClick={() => setQuestionList(open=> !open)}
          className="w-1/4 cursor-pointer rounded-xl bg-blue-600 p-5 text-2xl font-bold text-white "
        >
          Let's go
        </button>
          )
        }
       
      </ContentBox>
      )
    }
   </>
  )
}

export default Home
