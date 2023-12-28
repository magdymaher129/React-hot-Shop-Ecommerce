/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from 'react'
import '../css/forminput.css'


/*init input components */
function FormInput(props) {

  const[focused,setFocused] = useState(false)
  return (
<div className="forminput">


<label htmlFor="username">{props.label}</label>
 <input name ={props.name} placeholder={props.placeholder} 
 type={props.type}
  onChange={props.onChange}
  required={props.required}
   pattern={props.pattern}
   onBlur={(e)=>setFocused(true)}
   onFocus={()=>props.name ==="confirmedPassword" && setFocused(true)}
   // eslint-disable-next-line react/no-unknown-property
  focused= {focused.toString()}
   />   
 <p className='error'>{props.error}</p> 
</div>
  


  )
}

export default FormInput