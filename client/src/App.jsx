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
        
      </Route>
    </Routes>
  )  
}
export default App;

  
 
