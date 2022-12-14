import styled from "styled-components"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url("https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2020/06/Featured-Image.jpg")
  center;
  display: flex;
  align-items: center;
  justify-content: center;


`;
const Wrapper = styled.div`
   width: 40%;
   padding: 20px;  
   background-color: white;

`;

const Form = styled.form`
   display: flex;
   flex-wrap: wrap;

`;
const Title = styled.h1`
   font-size: 25px;
   font-weight: 300;

`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;

`;
const Agreement = styled.span`
   font-size: 15px;
   margin: 20px 0px;

`;
const Button  = styled.button`
   width: 130px;
   border: none;
   padding: 15px 20px;
   background-color: teal;
   color: white;
   cursor: pointer;

`;



const Register = () => {
  return (
    <Container>

        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="first name"/>
                <Input placeholder="last name"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
                <Agreement>
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
      
    </Container>
  )
}

export default Register
