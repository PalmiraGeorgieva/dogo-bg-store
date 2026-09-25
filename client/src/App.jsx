import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import './App.css'
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Order from './pages/Order/Order';
import Women from './pages/Women/Women';
import Men from './pages/Men/Men';
import Kids from './pages/Kids/Kids';
import Deals from './pages/Deals/Deals';
import Collections from './pages/Collections/Collections';
import NotFound from './pages/NotFound/NotFound';
import FAQ from './pages/FAQ/FAQ';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import About from './pages/About/About';
import Delivery from "./pages/Delivery/Delivery";
import Return from "./pages/Return/Return";
import SizeGuide from "./pages/SizeGuide/SizeGuide";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path='/women' element={<Women />} /> 
        <Route path='/men' element={<Men />} /> 
        <Route path='/kids' element={<Kids />} /> 
        <Route path='/deals' element={<Deals />} /> 
        <Route path='/collections' element={<Collections />} /> 
        <Route path='/products/:productId'element={<ProductDetails />} />
        <Route path='/order' element={<Order />} />
        <Route path='/faq'  element={<FAQ />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/return" element={<Return />} />
        <Route path="/size-guide" element={<SizeGuide />} />
        
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
  
export default App;
