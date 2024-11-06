import React from 'react'


export default function User() {
  const users = [{
    id: 1,
    name: 'john',
    lastname: 'Doe',
    position: '11'
  },
  {
    id: 2,
    name: 'tum',
    lastname: 'see',
    position: '22'
  }]
  return (
    <div>
      {users.map(user=>(
        <div className='flex justify-center' key={user.id}> 
          <p>{user.name}</p>
          <p>{user.lastname}</p>
          <p>{user.position}</p>
        </div>
      ))}
    </div>
  )
}
