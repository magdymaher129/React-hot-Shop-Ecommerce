import { Button, Container, Form, NavLink, Navbar } from "react-bootstrap";

import useNav from "../hook/useNav";

import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import storeContext from "../../../data/store";
import { Link } from "react-router-dom";

function PageNav() {
  const { selectTitle, setSelectTitle } = useContext(storeContext);
  const { logout, logged, img, role, auth, data } = useNav();
  const handleSubmit = (e) => {
    setSelectTitle(e.target.value);
  };
  return (
    <Navbar
      expand='lg'
      bg='dark'
      data-bs-theme='dark'
      className='bg-body-tertiary'
    >
      <Container fluid className='mx-4'>
        <Link
          to='/'
          style={{
            color: "red",
            fontSize: "40px",
            paddingRight: "18px",
            textDecoration: "none",
          }}
        >
          Hot Store
        </Link>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <div className='d-flex w-100 justify-content-between'>
            <Form
              className='d-flex'
              style={{ width: "100%", alignItems: "center" }}
            >
              <Form.Control
                type='search'
                placeholder='Search'
                aria-label='Search'
                style={{ backgroundColor: "grey" }}
                onChange={handleSubmit}
              />
              <Button variant='outline-light' style={{ width: "80px" }}>
                Search
              </Button>
            </Form>

            {auth() ? (
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <NavLink href='/shoppingcart'>
                  <FaShoppingCart
                    style={{
                      
                      fontSize: "25px",
                      marginTop: "5px",
                     
                    }}
                  />
                </NavLink>
              </div>
            ) : (
              ""
            )}
            <div
              style={{ display: "flex", justifyContent: "space-between" }}
            ></div>

            <ul className='navbar-nav ml-auto'>
              {/* <!-- Nav Item - User Information --> */}
              <li className='nav-item dropdown no-arrow'>
                <NavLink
                  className='nav-link dropdown-toggle'
                  href='/login'
                  id='userDropdown'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  {logged && data ? (
                    <span className='mr-2 d-none d-lg-inline text-gray-600 small'>
                      {" "}
                      {auth().user}
                    </span>
                  ) : (
                    ""
                  )}
                  <img
                    className='img-profile rounded-circle'
                    src={img}
                    height={40}
                    width={40}
                  />
                </NavLink>

                {/* <!-- Dropdown - User Information --> */}
                <div
                  className='dropdown-menu dropdown-menu-right shadow animated--grow-in'
                  aria-labelledby='userDropdown'
                >
                  <NavLink className='dropdown-item' href='#'>
                    <i className='fas fa-user fa-sm fa-fw mr-2 text-gray-400'></i>
                    Profile
                  </NavLink>
                  {/* {role == "admin" ? (
                    <NavLink href='/'>
                      <NavLink className='dropdown-item' href='/'>
                        <i className='fas fa-cogs fa-sm fa-fw mr-2 text-gray-400'></i>
                        {role}
                      </NavLink>
                    </NavLink>
                  ) : (
                    ""
                  )} */}

                  <NavLink className='dropdown-item' href='#'>
                    <i className='fas fa-list fa-sm fa-fw mr-2 text-gray-400'></i>
                    Activity Log
                  </NavLink>
                  <div className='dropdown-divider'></div>
                  <NavLink
                    to='/login'
                    className='dropdown-item'
                    onClick={logout}
                  >
                    <i className='fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400'></i>
                    Logout
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PageNav;
