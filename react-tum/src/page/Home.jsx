import React, { useState } from 'react'
import Admin from '../components/Admin'
import User from '../components/User'


export default function Home() {
  const [isAdmin, setIsAdmin] = useState(true)
  return (
    <div>
        
        <h1>Generation Thailand</h1>
        <h1>React - Assessment</h1>
     

      <button className='border px-4 py-2' onClick={() => setIsAdmin(true)}>admin</button>
      <button className='border px-4 py-2' onClick={() => setIsAdmin(false)}>user</button>

      {isAdmin && <Admin />}
      {!isAdmin && <User />}

    </div>
  )
}
