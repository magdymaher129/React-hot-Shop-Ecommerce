import { Container } from "react-bootstrap";
import SideBar from "../page components/SideBar";
import StoreProducts from "../components/products/jsx/StoreProducts";
import Paginate from "../components/pagination/Paginate";
import AdminTop from "../admin/jsx/AdminTop";





function Home() {
 
  return (
    <>

  <Container fluid style={{ display: "flex" ,marginTop:"40px"}}>
      <div>
        <SideBar />
      </div>
      <div >
        <StoreProducts />
     
      </div>
   
    </Container>
  
    <div style={{marginTop:"10px"}}>
        <Paginate />
     
      </div>
    </>
  
  );
}

export default Home;
