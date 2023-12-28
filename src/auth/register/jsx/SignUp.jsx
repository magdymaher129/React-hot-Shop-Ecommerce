import FormInput from "./FormInput";
import "../css/form.css";
import {  useState } from "react";
import useRegister from "../hook/useRegister";
import { Link } from "react-router-dom"
function SignUp() {
  const { handleRegister, error, userSubmit,
     emailSubmit, PasswordSubmit } = useRegister()


  const [value, setValue] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const data = [
    {
      id: "1",
      name: "userName",
      label: "userName",
      placeholder: "userName",
      type: "text",
      autoComplete: "none",
      pattern: "^[A-Za-z0-9]{3,20}$",
      required: true,

      error: "user name must be 3 to 20 character",
    },
    {
      id: "2",
      name: "email",
      label: "email",
      placeholder: "email",
      text: "email",
      autoComplete: "none",
      type: "email",
  
      required: true,
      error: "email must be a valid email address",
    },
    {
      id: "3",
      name: "password",
      label: "password",
      placeholder: "password",
      type: "password",
      pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&*+!~]).{5,15}$",
      required: true,
      error:
        "password must be contain at least a small letter a capital letter and spechial caracters",
    },
    {
      id: "4",
      name: "confirmedPassword",
      label: "confirm Password",
      placeholder: "confirm password",
      type: "password",
      pattern: value.password,
      required: true,
      error: "does not match password",
    },
  ];
  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    if(e.target.name === "userName"){
    userSubmit(e)
     
    }
    if(e.target.name === "email"){
      emailSubmit(e)
        console.log(e.target.name);
      }
      if(e.target.name === "password"){
        PasswordSubmit(e)
          console.log(e.target.name);
        }
  };


  return (
    <div className='main' >
      <form className='form' action="/" onSubmit={(e)=>handleRegister(e)}  method="post">
        <p className='header'>Register</p>
        {data.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            onChange={onChange}
            value={input.name}
          />
        ))}
        <button className='btn'>sign up</button>
       <span style={{color:"white"}}>Have an account</span>   <Link to='/login'style={{ color: "yellow",textDecoration:"none" }}>
      <h4 >Login</h4>
    </Link>  
      </form>
        {error ? <h2 style={{ color: "brown" }}>{error}</h2> : null}
  </div>
       
  );
}

export default SignUp;
