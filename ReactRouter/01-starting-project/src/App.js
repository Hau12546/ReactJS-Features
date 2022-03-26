import { Fragment } from "react";
import { Navigate } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import MainHeader from "./components/MainHeader/MainHeader";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import Welcome from "./components/Welcome";

function App() {
  return (
    <Fragment>
      <MainHeader></MainHeader>
      <Routes>
        <Route path='/' exact element={<Navigate to={'welcome'}/>}></Route>
      <Route path="/welcome/*" element={<Welcome></Welcome>}>
      <Route path="new" element={<p>Welcome New User (^__^)</p>}></Route>  
      </Route>
      <Route path="/product" exact element={<Product></Product>}></Route>
      <Route path='/productDetail/:productID' element={<ProductDetail></ProductDetail>}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
