import {  NavLink} from "react-bootstrap";

import useLink from "../hook/useLink";

function PageFooter() 
{
 const {data, error, loading } =useLink()

return (
  <div
 
  className='mt-4'
  style={{ width: "100%",margin:"0",backgroundColor:"rgb(43,48,53)",padding: "100px"}}
>
  <div style={{ display: "flex", justifyContent: "space-between" }}>
    <div   style={{display:"flex",flexWrap:"wrap"}}>
    {data && data.links.data.map((link)=>{
      return (
        <div key={link.id} style={{width:"300px",marginTop:"10px"}}>
        <h5 >
        <NavLink   to="#" style={{color:"#b0afaf",textDecoration: "none"}}>
          {link.attributes.title}
        </NavLink>
      </h5></div>
      )
    })}
      
     
    </div>
  </div>
</div>

)
  }
export default PageFooter;
