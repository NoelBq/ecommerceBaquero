
import './App.css';
import NavBar from './components/navBar/NavBar'
import ItemListContainer from './components/shopItems/ItemListContainer';
import Home from './pages/Home';
import ItemDetailContainer from './components/shopItems/ItemDetailContainer';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from './pages/notFound/NotFound';


function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact={true} path="/" element={<Home />} />
          <Route exact={true} path="/product/:id" element={<ItemDetailContainer />} />
          <Route exact={true} path="/contacto" element={<Contact />} />
          <Route exact={true} path="/nosotros" element={<About />} />
          <Route exact={true} path={"/categories/:categoria"} element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
