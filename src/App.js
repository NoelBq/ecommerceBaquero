
import './App.css';
import NavBar from './components/navBar/NavBar'
import ItemListContainer from './components/shopItems/ItemListContainer';
import Home from './pages/Home';
import ItemDetailContainer from './components/shopItems/ItemDetailContainer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ItemDetailContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
