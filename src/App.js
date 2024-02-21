
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './containers/Header';

import ProductDetail from './containers/ProductDetail';
import ProductListnings from './containers/ProductListings';
function App() {
  
  return (
    
    <div className="App">
      <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<ProductListnings/>}/>
        <Route path='/pro' element={<ProductDetail/>}></Route>
        <Route path='*' element={<div>404 Not Found!</div>}></Route>
      </Routes>  
      </Router>
      
    </div>
  );
}

export default App;
