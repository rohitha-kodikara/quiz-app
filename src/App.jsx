import React from 'react'
import { useEffect } from 'react'


const App = () => {

  useEffect(function(){
    fetch('http://localhost:3001/questions')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch(error => console.log(error))
      
    
  }, [])

  return (
    <div>
     sdfd
    </div>
  )
}

export default App
