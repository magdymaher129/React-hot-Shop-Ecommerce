import "bootstrap/dist/css/bootstrap.min.css";
import storeContext from "./data/store.js";
import Home from "./pages/Home";
import { useState } from "react";

import PageFooter from "./page components/footer/jsx/PageFooter.jsx";

import PageNav from "./page components/navbar/jsx/PageNav.jsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginForm from "./auth/login/jsx/LoginForm.jsx";


import SignUp from "./auth/register/jsx/SignUp.jsx";

import SingleProduct from "./components/products/jsx/SingleProduct.jsx";
import ShoppingCart from "./shopping components/jsx/ShoppingCart.jsx";
import NavPage from "./page components/navbar/jsx/NavPage.jsx";
import NavMain from "./page components/navbar/jsx/NavMain.jsx";
import Logout from "./auth/logout/jsx/Logout.jsx";
import AdminMenue from "./admin/jsx/AdminMenue.jsx";
import NavTop from "./page components/navbar/jsx/NavTop.jsx";

function App() {
  // const { category } = useCat();
  // const { color } = useColor();
  // const { size } = useSize();
  // const [colors, setColors] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedcats, setSelectedcats] = useState([]);
  const [selectedSize, setSelectedSize] = useState([]);
  const [selectTitle, setSelectTitle] = useState([]);
  const [sort, setSort] = useState(["categories.id:asc"]);
  const [num, setNum] = useState(1);
  const [total, setTotal] = useState(0);
  return (
    <storeContext.Provider
      value={{
        selectedColors,
        setSelectedColors,
        selectedcats,
        setSelectedcats,
        selectedSize,
        setSelectedSize,
        sort,
        setSort,
        num,
        setNum,
        total,
        setTotal,
        selectTitle,
        setSelectTitle,
      }}
    >
      <BrowserRouter>
<NavTop/>
{/* <NavMain /> */}
        <Routes>
          <Route  exact  path='/' element={<Home />}></Route>
          <Route  path='/login' element={<LoginForm />}></Route>
          <Route  path='/logout' element={<Logout />}></Route>
          <Route  path='/signup' element={<SignUp />}></Route>
          <Route  path='/product/:id' element={<SingleProduct />}> </Route>
            <Route  path="/shoppingcart" element={<ShoppingCart />}></Route>
            <Route  path='/admin' element={<AdminMenue />}></Route>
            
         
        </Routes>
        <div style={{ marginTop: "10px",zIndex:-90 }}>
          <PageFooter style={{ zIndex:90 }}/>
        </div>
      </BrowserRouter>
     
    </storeContext.Provider>
  );
}

export default App;
