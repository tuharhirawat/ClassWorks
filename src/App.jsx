import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppointmentForm from './component/AppointmentForm'
import AppointmentList from './component/AppointmentList'
import Main_Component from './component/Main_Component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <AppointmentForm/>
      <AppointmentList />
      <Main_Component />
    </>
  )
}
// import Main_Component from './component/form/Main_component'

export default App



