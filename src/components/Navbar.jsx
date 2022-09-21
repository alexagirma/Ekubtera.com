import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
 
const Container = styled.div`
     height: 90px;
     
     
  `;

const Wrapper = styled.div`
     padding: 3px 30px;
     display: flex;
     align-items: center;
     justify-content: space-between;
     background-color: white;
     color: black;
     font-weight: bold;
     
       `;

const Left = styled.div `
     flex: 1;
     display: flex;
     align-items: center;
     `;

const Logo = styled.h1`
font-weight: bold;
`;

/*const Language = styled.span`
     font-size: 14px;
     cursor: pointer; 
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
  border: none;      
`;*/ 

/*const Center = styled.div `
     flex: 1;
     text-align: center;
     `;

//const Logo = styled.h1`
    font-weight: bold;
`; */  
const Right = styled.div `
     flex: 1;
     display: flex;
     align-items: center;
     justify-content: flex-end;

     `;  

const MenuItem = styled.div`
    font-size:14px;
    cursor: pointer;
    margin-left: 25px;
    `;   

const Language = styled.span`
     font-size: 14px;
     cursor: pointer;
     margin-left: 25px;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 15px;
    padding: 5px;
`

const Input = styled.input`
  border: none;
`;

 const Navbar = () => {
   return (
     <Container>
        <Wrapper>
            <Left>
             <Logo><img src="/images/logo.png" alt="logo"/></Logo>
             
            </Left>
            <Right>

                <MenuItem>REGISTER</MenuItem>
                <MenuItem>LOGIN</MenuItem>
                <MenuItem>
                  <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined/>
                  </Badge>
                </MenuItem>

                <Language>EN</Language>
              <SearchContainer>
                  <Input placeholder="Search"/>  
                  <Search style={{color:"gray", fontSize:16}}/>
              </SearchContainer>


            </Right>
        </Wrapper>
     </Container>
   )
 }
 
 export default Navbar
 