
import { useSignOut } from 'react-auth-kit'
import {Button} from "react-bootstrap"
import { useNavigate } from "react-router-dom";
function Logout() {
    const signOut = useSignOut()
    const navigate= useNavigate()
    const logout=()=>{
        signOut()
navigate('/')
    }
  return (
    <div style={{minHeight:"80vh",display:"flex",justifyContent:"center"}}>
        
        <div style={{ padding:"50px",minWidth:"400px",margin:"auto",border:"1px solid grey",borderRadius:"10px",boxShadow:"2px 4px grey"}}>
        <h3 style={{textAlign:"center",marginBottom:"50px"}}>Logout</h3>
            <h4>Are you sure to log out ?</h4>
        <Button variant='danger'  style={{width:"200px",margin:"30px"}}onClick={ logout}>Sign Out</Button>
        </div>
        
      
        </div>
  )
}

export default Logout