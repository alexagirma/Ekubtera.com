import styled from "styled-components"


const Container = styled.div`
    height: 30px;
    background-color: #5cb8dd;
    color: #e9f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 600;
    
`;

const Announcement = () => {
  return (
    <Container>
      Super Deal! Online Habesha shopping Free shipping on Orders Over 1000Birr
    </Container>
  )
}

export default Announcement
