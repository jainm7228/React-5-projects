
import './styles/app.scss';

import {BrowserRouter ,Routes,Route}from "react-router-dom"
import Header from './components/Header';
import Home from './components/Home';
import { Toaster } from 'react-hot-toast';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
    <Header/>    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    <Toaster/>
    {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
