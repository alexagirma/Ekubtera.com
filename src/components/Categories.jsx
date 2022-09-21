import styled  from "styled-components"
import { categories } from '../data'
import CategoryItem from './CategoryItem';

const Container = styled.div`
   // display: flex;
    padding: 5px;
    align-content: flex-start;
    margin-bottom: -150px;
`;


const Wrapper = styled.div`
display: flex;
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

const Categories = () => {
  return (
    <Container>
    <Title>CATEGORIES</Title>
        <Wrapper>
             {categories.map(item=>(
            <CategoryItem item={item} key= {item.id} /> 
        ))}
       
       </Wrapper>
    </Container>
  )
}  

export default Categories