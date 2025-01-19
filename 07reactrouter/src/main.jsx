import React from 'react'
import ReactDOM from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Components/home/home.jsx'
import Layout from './layout.jsx'
import About from './Components/about/about.jsx'
import Contact from './Components/contacts/contacts.jsx'
import User from './Components/user/user.jsx'
import Github, { githubinfolder } from './Components/github/github.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//      element: <Layout/>,
//      children:[
//       {
//        path:"",
//        element:<Home/>
       
//       },
//       {
//        path:"about",
//        element:<About/>

//       },
//       {
//         path:"contacts",
//         element:<Contact/>
 
//        }
//      ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout />}>
      <Route path='' element = {<Home/>}/>
      <Route path='about' element = {<About/>}/>

      <Route path='contacts' element = {<Contact/>}/>
      <Route path='user/:userid' element = {<User/>}/>
      <Route 
      loader = {githubinfolder}
      path='github' 
      element = {<Github/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
