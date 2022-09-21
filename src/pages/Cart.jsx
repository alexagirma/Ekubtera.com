import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'



const Container = styled.div``;
const Wrapper = styled.div`
    padding: 20px;

`;
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

`;

const TopButton = styled.button`
   padding: 10px;
   font-weight: 600;
   cursor: pointer;
   border: ${props=>props.type === "filled" && "none"};
   background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
   color: ${props=>props.type === "filled" && "white"};



`;
const TopTexts = styled.div``;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;

`;

const Bottom = styled.div`
   display: flex;
   justify-content: space-between;


`;
const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;

`;
const ProductDetail = styled.div`
    flex: 2;
    display: flex;

`;
const Image = styled.img`
   width: 200px;

`;
const Details = styled.div`
   padding: 20px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;

`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};

`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 20px;
`; 
const ProductAmount = styled.div`
   font-size: 30px;
   margin: 5px;
 `;
const ProductPrice = styled.div`
   font-size: 30px;
   font-weight: 300;

`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;

`;


const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;

`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
   width: 100%;
   padding: 10px;
   background-color: black;
   color: white;
   font-weight: 600;

`;

const Cart = () => {
  return (
    <Container>

        <Navbar/>
        <Announcement/>
        <Wrapper>
             
           <Title>YOUR BAG</Title>
           <Top>

            <TopButton>CONTINUE SHOOPING</TopButton>
            <TopTexts>

                <TopText>Shopping Bag(2)</TopText>
                <TopText>Your Wishlist (0)</TopText>


            </TopTexts>

            <TopButton type="filled">CHECKOUT NOW</TopButton>

           </Top>
           <Bottom>

             <Info>
                <Product>
                   <ProductDetail>

                       <Image src="https://i0.wp.com/tdsblog.com/wp-content/uploads/2018/12/Finchitua-bahilawai-lookbook-Image-Finchitua-3.jpg?fit=683%2C1024&ssl=1"/>;
                       <Details>
                        <ProductName><b>Product</b> የሐበሻ ቀሚሶች</ProductName>
                        <ProductId><b>ID</b> 919174519</ProductId>
                        <ProductColor color="black"/>
                        <ProductSize><b>Size</b> 37.5</ProductSize>
                       </Details>

                   </ProductDetail>
                   <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>2000 Birr</ProductPrice> 
                   </PriceDetail> 
                </Product>

                <Hr/>

                <Product>
                   <ProductDetail>

                       <Image src="https://m.media-amazon.com/images/I/61r1x0NIh7L._MCnd_AC_UL320_.jpg"/>;
                       <Details>
                        <ProductName><b>Product</b> የሐበሻ ቀሚሶች</ProductName>
                        <ProductId><b>ID</b> 919174519</ProductId>
                        <ProductColor color="gray"/>
                        <ProductSize><b>Size</b> M</ProductSize>
                       </Details>

                   </ProductDetail>
                   <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>1</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>3000 Birr</ProductPrice> 
                   </PriceDetail> 
                </Product>



             </Info>
             <Summary>
             <SummaryTitle>ORDER SUMMARY</SummaryTitle>
             <SummaryItem>

                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>5000 birr</SummaryItemPrice>

             </SummaryItem>
             <SummaryItem>

                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>500 birr</SummaryItemPrice>

             </SummaryItem>
             <SummaryItem>

                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>-500 birr</SummaryItemPrice>

             </SummaryItem>
             <SummaryItem type="total">

                <SummaryItemText >Total</SummaryItemText>
                <SummaryItemPrice>5000 birr</SummaryItemPrice>

             </SummaryItem>  
             <Button>CHECKOUT NOW</Button>
             </Summary>





           </Bottom>

        </Wrapper>
        <Footer/> 
        <Container/>
      
    </Container>
  );
};

export default Cart
