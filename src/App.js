import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newuser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';

function App() {
  return (
    <Router>
      <div className='App'>
        <Topbar />
        <div className='container'>
          <Sidebar />
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/users' element={<UserList />}></Route>
            <Route path='/user/:userId' element={<User />}></Route>
            <Route path='/newUser' element={<NewUser />}></Route>
            <Route path='/products' element={<ProductList />}></Route>
            <Route path='/product/:productId' element={<Product />}></Route>
            <Route path='/newProduct' element={<ProductList />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
