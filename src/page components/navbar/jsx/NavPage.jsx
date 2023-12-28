import { useContext, useEffect, useState } from "react";
import useNav from "../hook/useNav";
import "../css/nav.css";
import img1 from "/img/user.png";
import { Container, NavLink } from "react-bootstrap";

import storeContext from "../../../data/store";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "react-use-cart";
function NavPage() {
  const { selectTitle, setSelectTitle } = useContext(storeContext);
  const { logout, logged, img, role, auth, data } = useNav();
  const [toggle, setToggle] = useState(false);
  const [focus, setFocus] = useState(false);
  const { totalItems } = useCart();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  // setTimeout(() => {
  //   if (toggle) {
  //     setToggle(false);
  //   }
  // }, 2000);

  return (
    <nav >

      <div className='logo' style={{width:"20%"}}>
        <Link to='/' style={{ color: "red", textDecoration: "none" }}>
          {" "}
          <h3>Hot Store</h3>
        </Link>
      </div>
<div style={{width:"80%",display:"flex",justifyContent:"space-between"}}>
      <div className='search-bar'>
        <input type='text' placeholder='Search' />
        <button type='submit'>Search</button>
      </div>
      <div style={{display:"flex",gap:"40px",justifyContent:"flex-end"}}>
        <Link to='/shoppingcart' className='nav-cart'>
          <FaShoppingCart />
        </Link>
        <div className='nav-cart-num'>
          <p style={{ textAlign: "center" }}>{totalItems}</p>
        </div>
      
      <div className='user' >
        {logged && data ? (
          <span
            style={{
              position: "relative",
              right: "30px",
              top: "10px",
              color: "black",
              border: "4px solid grey",
              borderRadius: "50%",
              padding: "6px",
              fontWeight: "bolder",
              textTransform: "capitalize",
            }}
           
           
          >
            {" "}
            {auth().user.charAt(0)}
          </span>
        ) : (
          <img
            src={img1}
            alt='User'
         
            onClick={handleToggle}
            className='nav-img'
          />
        )}
        {toggle ? (
          <div className='dropdown' onMouseEnter={() => setToggle(true)} onMouseLeave={()=>setToggle(false)} style={{backgroundColor:"blue"}}>
            <div className='dropdown-content'>
              <Link className='nav' to='/' >
                Profile
              </Link>
              <Link
                className='nav'
                to='/login'
               
              >
                login
              </Link>
              <Link className='nav' to='#' >
                Logout
              </Link>
            </div>
          </div>
        ) : (
          ""
        )}
      </div></div></div>
    </nav>
  );
}

export default NavPage;
