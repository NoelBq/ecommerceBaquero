
import './App.css';
import NavBar from './components/navBar/NavBar'

import Home from './pages/Home';
import ItemDetailContainer from './components/shopItems/ItemDetailContainer';
import About from './pages/about/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from './pages/notFound/NotFound';
import Cart from './pages/cart/Cart';
import { CartProvider } from './context/CartContext'
import EndPurchase from './components/ordercreated/EndPurchase';


function App() {

  return (
    <div className="App">

    <CartProvider>
      <Router>
       
        <NavBar />
        <Routes>
          <Route exact={true} path="/" element={<Home />} />
          <Route exact={true} path="/product/:id" element={<ItemDetailContainer />} />
          <Route exact={true} path="/nosotros" element={<About />} />
          <Route exact={true} path="/cart" element={<Cart />} />
          <Route exact={true} path={"/categories/:categoria"} element={<Home />} />
          <Route exact={true} path={"/checkout"} element={<EndPurchase />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </Router>
      </CartProvider>
    </div>
  );
}

export default App;
