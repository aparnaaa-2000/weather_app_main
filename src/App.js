// import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import { Route } from 'react-router';

import Place from './components/Place';
import Temperature from './components/Temperature';
import Navbar from './components/Navbar';
import Days from './components/Days'
import Home from './pages/Home';

import Main from './components/Main';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/main' element={<Main/>}/>
      <Route path='/place' element={<Place/>}/>
      <Route path='/temperature' element={<Temperature/>}/>
      <Route path='/navbar' element={<Navbar/>}/>
      <Route path='/days' element={<Days/>}/>
      <Route path='/' element={<Home/>}/>
      



    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
