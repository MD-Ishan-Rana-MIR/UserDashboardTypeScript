import React from 'react'
import UserList from './components/UserList'
import AddUser from './components/AddUser'

const App: React.FC = () => {
  return (
    <div className='text-center' >
      <h1>Dashboard</h1>
      <UserList/>
      
    </div>

  )
}

export default App