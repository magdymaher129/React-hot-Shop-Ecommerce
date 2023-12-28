import { Link } from 'react-router-dom'
import '../css/navtop.css'
import { FaShoppingCart } from 'react-icons/fa'
import { useState } from 'react';
import img1 from "/img/user.png";
function NavTop() {
  const [open, setopen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle)
  };
  return (
    <nav>
    <div className="logo">
      <Link to="/">Brand</Link>
      </div>
    <input type="checkbox" id="click"/>
    <label htmlFor="click" className="menu-btn">
      <i className="fas fa-bars"></i>
    </label>
    <ul style={{ zIndex: "10" }}>
      <li className='search'>
        <input type="text" placeholder="search" className="navtop-search"/>
        <button type="button" className='search-button'>search</button>
      </li>
      <li>
        
        
      <Link to='/' >
           Home
          
          </Link>
        
        </li>
      <li><a href="#">About</a></li>
      <li ><Link to='/shoppingcart' className='shoppingcart'   >
            <FaShoppingCart />
          
          </Link></li>
      <li><Link to='/login'  >
         <img
              src={img1}
              alt='User'
              onClick={handleToggle}
              className='navtop-img'
              onMouseEnter={()=>setToggle(true)}  />
             </Link>
          </li>
    
    </ul>
    
  </nav>
  )
}

export default NavTop