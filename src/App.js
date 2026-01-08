import React, { useState } from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import { Logincontext } from './context/Logincontext'

function App() {
  const[name,setName]=useState("")
  const [pwd, setPwd] = useState("")
  const[profile,setProfile]=useState(false)
  return (
    <div>
      <Logincontext.Provider value={{name,setName,pwd,setPwd,setProfile}}>
      {profile ? <Profile/> : <Login/> } 
       </Logincontext.Provider>
    </div>
  )
}

export default App