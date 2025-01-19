import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './Components/footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Layout />
    <Header />
    <Footer />
    <Home />

    </>
  )
}

export default App
