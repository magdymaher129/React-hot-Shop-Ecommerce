import  { useContext, useEffect, useState } from 'react'

import Allproducts from './Allproducts'

import { useMyProduct } from '../hooks/useMyProduct'
import storeContext from '../../../data/store'
import { ITEM_PER_PAGE } from '../../../constants/constant'

function StoreProducts() {
// const [products,loading,error] = useProducts()
const{  selectedColors,
 
 selectedcats,
 
  selectedSize,sort,setTotal,num}=useContext(storeContext)

 const  { data, loading, error }=useMyProduct(selectedcats,selectedColors,selectedSize,sort,ITEM_PER_PAGE,num)
 

 const[products,setProducts]=useState()



 useEffect(()=>{

   data && setProducts(data.products.data);
  
 
   data && setTotal(data.products.meta.pagination.total )
  
},[data, setTotal])


if(loading){
  <h2>Loading...</h2>
}
if(error){
  <h2>there are some thing error....</h2>
}
  return (

   <Allproducts products={products} />
  )
}

export default StoreProducts   