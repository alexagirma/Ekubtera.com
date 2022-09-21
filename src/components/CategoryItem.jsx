import styled  from "styled-components"
import { Link } from 'react-router-dom';

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;
const Image = styled.img`
    width: 100%;
    height: 70%;
    object-fit: cover;
    position: absolute;
  right: 0px;
  left: 0px;

`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


const Title = styled.h1`
    color: #69681b;
    margin-bottom: 20px;
  


`;

const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: #061d06;
    color: white;
    cursor: pointer;
    font-weight: 600;
   
   
`;


const CategoryItem = ({item}) => {
  return (
    <Container>
        <Link to={`/product/${item.cat}`}>

        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
        </Link>
        
        
    </Container>
  )
}

export default CategoryItem