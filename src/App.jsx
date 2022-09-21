import ProductList from "./pages/ProductList";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


const App = () => {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/product/:category" element={<ProductList/>} />
      <Route path="/products/:id" element={<Product/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  );
  
};

export default App;