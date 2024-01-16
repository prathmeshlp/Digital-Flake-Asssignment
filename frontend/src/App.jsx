import "./App.css";
import AddCategory from "./Components/AddCategory";
import Category from "./Components/Category";
import ForgotPassword from "./Components/ForgotPassword";
import Home from "./Components/Home";
import Login from "./Components/Login";
import NavBar from "./Components/NavBar";
import Products from "./Components/Products";


import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/forgotpassword" element={<ForgotPassword />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/addcategory" element={<AddCategory />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
