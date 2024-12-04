import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Main from './components/Main';
import Header from './components/header';
//import DoctorList from './components/DoctorList';
import SearchBar from './components/SearchBar';
import Profile from './components/Profile';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      {/* <Profile /> */}
      <SearchBar />    </>
  )
}

export default App
