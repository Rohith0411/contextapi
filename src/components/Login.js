
import { useContext } from 'react'
import { Logincontext } from '../context/Logincontext'

function Login() {
    const{setName,setProfile}=useContext(Logincontext)
    //  const[name,setName]=useState("")
    //  const[pwd,setPwd]=useState("")
    //  const[profile,setProfile]=useState(false)
    //  const show=()=>{
    //     if(name==="Rohith" && pwd==="123456")
    //         setProfile(true)
    //     else
    //         setProfile(false)
    //  }
  return (
    <div>
        <input type='text' onChange={(e)=>setName(e.target.value)} placeholder='Enter User Name'></input><br></br>
        <input type='password'  placeholder='Enter Password'></input><br></br>
        <button onClick={()=>setProfile(true)}>Login</button><br></br>
        {/* {(profile && "Valid User: "+name) || "Invalid User"} */}
    </div>
  )
}

export default Login