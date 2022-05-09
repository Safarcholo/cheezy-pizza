import './App.css';
import './index'
import 'react-popper'
import 'bootstrap/dist/css/bootstrap.min.css';
import { usePopper } from 'react-popper';

import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import OrdersScreen from './screens/OrdersScreen';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>

        <Route path="/" exact component={Homescreen} />
        <Route path="/cart" exact component={Cartscreen} />
        <Route path="/register" exact component={Registerscreen} />
        <Route path="/login" exact component={Loginscreen} />
        <Route path="/orders" exact component={OrdersScreen} />

      </BrowserRouter>

    </div>
  );
}

export default App;
