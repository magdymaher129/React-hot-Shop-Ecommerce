import { useState } from "react";
import { Link } from "react-router-dom";
import nav from "../css/navbar.module.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaShoppingCart } from "react-icons/fa";
import img1 from "/img/user.png";
import { useSignOut } from "react-auth-kit";
import useNav from "../hook/useNav";
import { useCart } from "react-use-cart";
function NavMain() {
  const [open, setopen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { logout, logged, img, role, auth, data } = useNav();

  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle)
  };
  const { totalItems } = useCart();
  return (
    <nav className={nav.navs}>
      <div className={nav.logo}>
        <Link to='/'>HOT STORE</Link>
      </div>
      <input type='checkbox' id='click' name='click' />
      <label
        htmlFor='click'
        className={nav.menuBtn}
        onClick={() => setopen(!open)}
      >
        {open ? (
          <p>
            <ImCross />
          </p>
        ) : (
          <p>
            <FaBars />
          </p>
        )}
      </label>

      <ul style={{ zIndex: "10" }}>
        <li className={nav.navsList}>
          <input type='text' placeholder='search' />
          <button type='button'>search</button>
        </li>
        <li className={nav.navsList}>
          <Link className='' to='/'>
            Home
          </Link>
        </li>
        <li className={nav.navsList}>
          <a href='#'>About</a>
        </li>
        <li className={nav.navsList}>
          <Link to='/shoppingcart' className={nav.navCart}>
            <FaShoppingCart />
            <span className={nav.navNum}>{totalItems}</span>
          </Link>
        </li>
        <li className={nav.navsList}>
          {logged && data ? (
            <span
              style={{
                position: "relative",
                right: "5px",
                top: "5px",
                color: "red",
                backgroundColor: "#fff",
                border: "4px solid grey",
                borderRadius: "50px",
                padding: "6px",
                fontWeight: "bolder",
                fontSize: "18px",
                cursor: "pointer",
                textTransform: "capitalize",
                transition: "all 800",
              }}
              onClick={handleToggle}
            >
              
              {auth().user.charAt(0)}
            </span>
          ) : (
            <img
              src={img1}
              alt='User'
              onClick={handleToggle}
              onMouseEnter={()=>setToggle(true)}
              className={nav.navImg}
            />
          )}
          {toggle ? (
            <div
              className={nav.dropdown}
              onMouseEnter={() => setToggle(true)}
              onMouseLeave={() => setToggle(false)}
         
            >
              <div className={`${nav.dropdown} ${nav.content}`}>
                {auth() ? (
                  <Link className={nav.nav} to='/'>
                    {auth().user.toUpperCase()}
                  </Link>
                ) : (
                  ""
                )}

                {logged && data ? (
                  <Link className={nav.nav} to='/logout'>
                    logout
                  </Link>
                ) : (
                  <Link className={nav.nav} to='/login'>
                    Login
                  </Link>
                )}
              </div>
            </div>
          ) : (
            ""
          )}
        </li>
        {toggle ? (
          <>
            <li className={`${nav.navsList}, ${nav.porto}`}>
              {auth() ? <Link to='/'>{auth().user.toUpperCase()}</Link> : ""}
            </li>
            {logged && data ? (
              <li className={`${nav.navsList} ${nav.login}`}>
                <Link to='/logout'>Logout</Link>
              </li>
            ) : (
              <li className={`${nav.navsList} ${nav.login}`}>
                <Link to='/login'>Login</Link>
              </li>
            )}{" "}
          </>
        ) : (
          ""
        )}
      </ul>
    </nav>
  );
}

export default NavMain;
