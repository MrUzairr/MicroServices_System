import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/home';
import Login from './Pages/login';
import Signup from './Pages/signup';
import Admin from './Pages/Admin/index';
import Product from './Pages/product';
import AddCart from './Components/AddCart/addCart';
import AddCart1 from './Components/AddCart/addCart1';
import AddCart2 from './Components/AddCart/addCart2';
import Order from './Pages/order';
import OtherData from './Pages/OtherData/index';
import Order1 from './Pages/order1';
import Profile from './Pages/Profile';
import Collections from './Pages/Collections/index';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/all-products' component={Product}/>
        <Route exact path="/order/:productid" component={Order}/>
        <Route exact path="/order1/:id" component={Order1}/>
        <Route exact path='/add-cart' component={AddCart}/>
        <Route exact path='/add-cart1' component={AddCart1}/>
        <Route exact path='/add-cart2' component={AddCart2}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/python-data" component={OtherData}/>
        <Route exact path="/collection" component={Collections}/>
        <Route exact path='/admin' component={Admin}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={Signup}/>
      </Switch>
    </div>
  );
}

export default App;
