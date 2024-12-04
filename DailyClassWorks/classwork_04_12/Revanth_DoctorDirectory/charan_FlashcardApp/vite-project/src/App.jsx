import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './components/Main'
import FlashcardForm from './components/FlashcardForm.jsx'
import FlashcardList from './components/FlashcardList.jsx'
import Flashcard from './components/Flashcard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Main />
      
    </>
  )
}

export default App
