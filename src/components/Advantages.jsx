import styled from "styled-components"

const Container = styled.div`
   //display: flex;
  


`;

const Title = styled.h1`
    padding: 20px;
    align-items: center;
    justify-content: space-between;
   text-shadow: 2px 2px 4px #000000;  cursor: pointer;
    text-align: center;
    color: #083d20;
    font-style: italic;
    font-size: 40px;
   
  `;
  const Info = styled.div`
  display: flex; 
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer; 
    
  `;


const Image = styled.div`
  width: 100%;
display: flex;
object-fit: cover;
align-items: center;
justify-content: center;
border-radius: 50%;

margin: 3px;

transition: all 0.5s ease;


&:hover {
  
    background-color: white;
    transform: scale(1.1);
}
`;


const Wrapper = styled.div`
     padding: 3px 150px;
     display: flex;
     align-items: center;
     justify-content: space-between;
     background-color: white;
     color: #2c6851;
     font-weight: bold;
     font-size: 30px;
   
   
`;
const Subtitle = styled.div`
 margin: 10px;
 justify-content: space-between;
 padding: 15px;

`;


const Advantages = () => {
  return (
    <Container>
      
      <Title>ADVANTAGES</Title>
  
        <Info>
        <Image>
               <img src = "https://www.freeiconspng.com/thumbs/painting-icon/digital-painting-icon-11.jpg" alt="Awesome Design"/> 
            </Image>
            <Image>
                <img src = "https://cdn-icons-png.flaticon.com/512/726/726455.png" alt="Fast Trucker"/>
                </Image>
            <Image>
                <img src = "https://www.iconpacks.net/icons/1/free-certificate-icon-1356-thumb.png" alt="Customer Protection"/>
            </Image>
        </Info>
      <Wrapper>
          <Subtitle>Awesome Design</Subtitle>
          <Subtitle>Fast Delivery</Subtitle>
          <Subtitle>Customer Protection</Subtitle>
       

      </Wrapper>
      
    </Container>
  )
}

export default Advantages