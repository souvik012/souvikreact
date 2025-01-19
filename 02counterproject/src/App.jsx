import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Counter,setcounter] = useState(5)
  // let Counter =5 

  const addvalue =()=>{
    
    
    Counter = Counter +1
    setcounter(Counter)
    console.log("clicked", Counter);
    if(Counter > 19){
      Counter = 20
      setcounter(Counter)
    }
    
    
  }

  const removevalue=()=>{
    Counter = Counter-1
    setcounter(Counter)
    if(Counter < 1){
      Counter = 0
      setcounter(Counter)
    }
  }

  return (
    <>
     <h1>Souvik with React</h1>
     <h2>Counter value: {Counter}</h2>

     <button
     onClick={addvalue}>Increas value:{Counter}</button>
     <br />
     <button
     onClick={removevalue}
     >Decrease Value:{Counter}</button>
    </>
  )
}

export default App
