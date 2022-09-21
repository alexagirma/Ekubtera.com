import styled  from "styled-components"
import { BestProduct } from '../data'
import PopularProducts from './PopularProducts';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap; 
    padding: 20px;
    justify-content: space-between;

`;

const PopularProduct = () => {
  return (
    <Container>
        {BestProduct.map(item=>(
            <PopularProducts item={item} key= {item.id} /> 
        ))}
    </Container>
  )
}  

export default PopularProduct
