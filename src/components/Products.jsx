//import { useEffect } from "react";
//import { useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
//import axios from "axios";


const Container = styled.div`
    padding: 0px;
    //display: flex;
    flex-wrap: wrap; 
    justify-content: space-between;
    align-content: flex-start;
    
`;

const Wrapper = styled.div`
   display: flex;
   flex-wrap: wrap; 
   justify-content: space-between;
   align-content: flex-start;
`;

const Title = styled.h1`
    padding: 15px;
    align-items: center;
    justify-content: space-between;
   text-shadow: 2px 2px 4px #000000;  cursor: pointer;
    text-align: center;
    color: #083d20;
    font-style: italic;
    font-size: 40px;
    `;


const Products = () => {

/*const [products,setProducts] = useState([]);
const [filteredProducts,setFilteredProducts] = useState([]);


useEffect(()=>{

  const getProducts = async ()=>{
    try{

      const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}` 
      : "http://localhost:5000/api/products");
setProducts(res.data);
    }catch(err){}
  };

  getProducts()

}, [cat]);

useEffect(()=>{

  cat && setFilteredProducts(
    products.filter(filters(item=> Object.entries(filters).every(([key,value])=>
    item[key].includes(value))))
  )

},[products,cat,filters])
*/
  return (
    <Container>
      <Title>PRODUCTS</Title>

      <Wrapper>


        {popularProducts.map(item => (
          <Product item={item} key={item.id} />
        ))}
      
      </Wrapper>

    </Container>
  )
}

export default Products