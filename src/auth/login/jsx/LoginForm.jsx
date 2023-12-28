import { Link } from "react-router-dom"
import useLogin from "../hook/useLogin"
import { Button } from "react-bootstrap"


function LoginForm() {
const{handleSubmit,emailSubmit,PasswordSubmit,error}=useLogin()
  return (
    <div  style={{
      minHeight: "calc(100vh - 250px)",
 
      width: "100%",
      
      margin:"auto",
    
    }}>
  <div
    className='form '
   style={{minHeight:"400px",
   minWidth:"400px",
   backgroundColor: "#2b3035",
   padding:"40px",
     color:"#f2f2f2",
      borderRadius:"20px",
      marginTop:"100px",
   }}
  >
    <form onSubmit={handleSubmit}>
      <div className='mb-3 mt-3'>
        <label htmlFor='email' className='form-label'>
          Email:
        </label>
        <input
          type='email'
          className='form-control'
          id='email'
          autoComplete='false'
          placeholder='Enter email'
          name='email'
          onChange={emailSubmit}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='pwd' className='form-label'>
          Password:
        </label>
        <input
          type='password'
          className='form-control'
          id='pwd'
          placeholder='Enter password'
          name='pswd'
          onChange={PasswordSubmit}
          autoComplete='false'
        />
      </div>
      <div className='form-check mb-3'>
        <label className='form-check-label'>
          <input
            className='form-check-input'
            type='checkbox'
            name='remember'
          />{" "}
          Remember me
        </label>
      </div>
      <Button  variant="danger"   type='submit'>
          Submit
        </Button>
    </form>
    {error ? <h2 style={{ color: "brown" }}>{error}</h2> : null}
     create new account  <Link to='/signup'style={{ color: "yellow",textDecoration:"none" }}>
      <h4 >Sign up</h4>
    </Link>
  </div>
    </div>
  
  )
}

export default LoginForm