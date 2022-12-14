import styled  from "styled-components"


const Container = styled.div`
    flex: 1;
    margin: 1px;
    height: 30vh;
    width: 100%;
    position: relative;
    left: 0;
`;
const Image = styled.img`
    
    width: 100%;
    height: 100%;
    object-fit: cover;
    
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


const Title = styled.h1`
    color: white;
    margin-bottom: 20px;

`;

const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`;


const PopularProducts = ({item}) => {
  return (
    <Container>

        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
        
    </Container>
  )
}

export default PopularProducts