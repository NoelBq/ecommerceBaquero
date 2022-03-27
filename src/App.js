
import './App.css';
import NavBar from './components/navBar/NavBar'
import ItemListContainer from './components/shopItems/ItemListContainer';


function App() {
  
  return (
    <div className="App">
        <NavBar />
        <div className='main'>
        <ItemListContainer  />
        </div>
    </div>
  );
}

export default App;
