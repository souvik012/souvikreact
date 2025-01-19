import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-500 text-white text 3-xl'>
      user:{userid}
    </div>
  )
}

export default User
