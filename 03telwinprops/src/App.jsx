import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username: "Souvik Dinda",
    age:21

  }

  let arr = [1,2,3,4,5]

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded' >Tailwin Test</h1>
     <Card username="Souvik Dinda" btnText="visit"/>
     <Card username="Sanku" btnText="show here"/>
    </>
  )
}

export default App
