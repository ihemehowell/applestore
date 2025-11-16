import './App.css'
import Home from './component/Home/home'
import About from './component/About/about'
import Header from './component/Header/header'
import Cart from './component/Cart/cart'
import Footer from './component/Footer/footer'
import {Route, Routes,} from "react-router-dom";
import Product from "./component/Product/Product.jsx";
import ProductDetails from "./component/Product/ProductDetails.jsx";
import Checkout from "./component/Checkout/Checkout.jsx";
import Contact from "./component/Contact/Contact.jsx";

function App() {
 

  return (
    <>
        <div className="bg-light">
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Product />} />
                <Route path='/products/:id' element={<ProductDetails />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
        </div>

  

    </>
  )
}

export default App
