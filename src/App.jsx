import ErrorPage from "./components/Error"
import Home from "./components/Home"
import LoadingShimmer from "./components/LoadingShimmer"
import { useEffect, useState } from "react"

const App = () => {

  //state for questions
  const [questions, setQuestions] = useState([])
  //state for loading 
  const [loading, setLoading] = useState(true)
  //state for error
  const [error, setError] = useState(false)

  //show question list
   const[questionList, setQuestionList] = useState(false)

   useEffect(() => {
    const getQuestions = async () => {
      try {
        setLoading(true)
        setError(false)

        const response = await fetch("http://localhost:3001/questions")

        if (!response.ok) {
          throw new globalThis.Error(`Request failed with status ${response.status}`)
        }

        const data = await response.json()

        setQuestions(data)
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    getQuestions()
  }, [])

  const quizLength = questions.length
  

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-blue-900 p-6 font-sans"
    >
      {loading ? (
        <LoadingShimmer />
      ) : error ? (
        <ErrorPage />
      ) : (
        <Home 
        questions={questions} 
        quizLength={quizLength}
        setQuestionList={setQuestionList}
        questionList={questionList}
         />
      )}
    </div>
  )
}

export default App
