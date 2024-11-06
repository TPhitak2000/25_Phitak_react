import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-slate-600 h-10 flex gap-4'>
        <Link to= '/'>Home</Link>
        <Link to= '/Owner'>Owner</Link>
    </div>
  )
}

export default Navbar
