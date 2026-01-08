import React, { useContext } from 'react'
import { Logincontext } from '../context/Logincontext'

function Profile() {
    const { name } = useContext(Logincontext)
  return (
    <div>
        <h1>This is Profile page</h1>
        <h2>Welcome!!!..To The World  {name} </h2>
    </div>
  )
}

export default Profile