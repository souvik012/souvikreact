import { useState, useCallback, useEffect ,useRef} from 'react'

import './App.css'
//usestate
function App() {
  const [length, setLength] = useState(6)
  const [numall, setNumall] = useState(false)
  const [charall, setCharall] = useState(false)
  const [password, setPassword] = useState("")

  //refhook
  const passwordref = useRef(null)

  //usecallback

 const passwordgen = useCallback (()=>{
  let password =""
  let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numall) 
    str+="0123456789"

  
  if(charall)
    str+="!@#$%^&*()_={}[],.<>"
  

  for(let i = 1; i<=length ; i++){
   let char = Math.floor(Math.random() * str.length + 1)

   password += str.charAt(char)
  }
  setPassword(password)
 
} , [length , numall , charall ,setPassword])

const copypasstoclip = useCallback(()=>{
  passwordref.current?.select();
  passwordref.current?.setSelectionRange(0,length-1);

  window.navigator.clipboard.writeText(password)
},[password])

  //useeffect
useEffect(()=>{
passwordgen()
},[length,numall,charall,passwordgen])
    
 
  return (
  
     <div className=' w-full max-W-md mx-auto shadow-md
     rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 '>
      <h1 className='text-white text-center '>Password Generator</h1>
      <div className='flex shadow rounded-lg
      overflow-hidden mb-4'>
        <input
         type="text"
         value={password}
         className="outline-none w-full py-1 px-3"
         placeholder="password"
         readOnly
         ref={passwordref}
         />
         <button
          onClick={copypasstoclip} >Copy</button>
      </div>
    <div className='flex gap-x-2 space-x-10'>
     <div className='flex text-sm gap-x-2 space-x-10'>
       <div className='flex items-center gap-x-1'>
        <input type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}
         />
         <label>Length:{length}</label>
       </div>
       
       <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={numall}
        onChange={()=>{
          setNumall((prev)=>!prev);
          
        }}   
        />
        <label htmlFor="numberInput">Numbers</label>
       </div>

     </div>

     
       
       
       <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={charall}
        id='charecterInput'
        onChange={()=>{
          setCharall((prev)=>!prev);
          
        }}   
        />
        <label htmlFor="charInput">Charactor</label>
       </div>

     
     </div>

     </div>
   
  )
}

export default App
