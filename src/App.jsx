import { useState } from 'react'
import './App.css'
import Router from './router'
import Toast from './components/Toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router/>
      <Toast/>
    </>
  )
}

export default App
