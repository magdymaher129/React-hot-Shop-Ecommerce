/* eslint-disable react/prop-types */


import { Container } from 'react-bootstrap';
import SingleCard from './SingleCard';


function Allproducts({products}) {


  return (
  
<div style={{flexWrap: "wrap", gap: "10px"}}  className=' d-flex justify-content-center mt-4'>
        {products&&products.map( product =>  <SingleCard   product={product} key ={product.id} />)};
</div>


   
      
    
        
   
   
  )
}

export default Allproducts

