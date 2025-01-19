import React from 'react'
import ReactDOM from 'react-dom/client'
import R from './App.jsx'


function App(){
  return(
    <div>
      <h1>Custom App!! !</h1>
    </div>
  )
}

// const reactEliment = {
//   type: 'a',
//   props:{
//       href: 'https://google.com',
//       target: '_blank',
//   },

//   children:'Click me to go to google'
// }

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)

const Username = "code with Dinda"

const reactEliment =React.createElement(
  'a',
  {href:'https://google.com' ,target:'_blank'},
  'Click me to visit google',
  Username
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactEliment

)
