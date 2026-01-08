
import { useContext, useState } from 'react'
import { Logincontext } from '../context/Logincontext'

function Login() {
    const{name,setName,pwd,setPwd,setProfile}=useContext(Logincontext)
    //  const[name,setName]=useState("")
    //  const[pwd,setPwd]=useState("")
    //  const[profile,setProfile]=useState(false)
    const [error,setError]=useState("")
     const show=()=>{
        if(name==="Rohith" && pwd==="123456")
        {
            setProfile(true)
            setError("")
        }
        else
            setError("Invalid User Name or Password")
     }
  return (
    <div>
        <input type='text' onChange={(e)=>setName(e.target.value)} placeholder='Enter User Name'></input><br></br>
        <input type='password' onChange={(e)=>setPwd(e.target.value)}  placeholder='Enter Password'></input><br></br>
        <button onClick={()=>show()}>Login</button><br></br>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {/* {(profile && "Valid User: "+name) || "Invalid User"} */}
    </div>
  )
}

export default Login