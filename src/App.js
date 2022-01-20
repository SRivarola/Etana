import NavBarContainer from './components/NavBar/NavBarContainer';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Cart from './pages/Cart/Cart';
import CartContextProvider from './context/CartContext';
import Checkout from './pages/Checkout/Checkout';
import { UserContextProvider } from './context/UserContext';
import RestrictedRoute from './components/administrador/RestrictedRoute';
import AdminStock from './pages/AdminStock/AdminStock';
import AdminPrecio from './pages/AdminPrecio/AdminPrecio';
import AdminProducto from './pages/AdminProducto/AdminProducto';
import Error from './components/ErrorPath/Error';
import AdminEliminar from './pages/AdminEliminar/AdminEliminar';

function App() {

  return (
    <UserContextProvider>
      <CartContextProvider>
        <Router>
          <NavBarContainer />

          <Routes>
            <Route index element={<Home/>}/>
            <Route path='/prod/:prodId' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/admin/stock' element={<RestrictedRoute>
                                                  <AdminStock/>
                                                </RestrictedRoute>}/>
            <Route path='/admin/precio' element={<RestrictedRoute>
                                                  <AdminPrecio/>
                                                </RestrictedRoute>}/>  
            <Route path='/admin/producto' element={<RestrictedRoute>
                                                    <AdminProducto/>
                                                  </RestrictedRoute>}/>  
            <Route path='/admin/eliminar' element={<RestrictedRoute>
                                                    <AdminEliminar/>
                                                  </RestrictedRoute>}/>                                                                              
            <Route path = "*" element={<Error />}/>                          
          </Routes>
        </Router>
      </CartContextProvider>
    </UserContextProvider>
  );
}

export default App;
