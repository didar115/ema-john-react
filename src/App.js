import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css';
import Header from './componets/Header/Header.jsx';
import Inventory from './componets/Inventory/Inventory';
import NotFound from './componets/NotFound/NotFound';
import OrderReview from './componets/OderReview/OrderReview';
import Shop from './componets/Shop/Shop.jsx';

function App() {
  return (
		<div>
			<Header></Header>
			<Router>
        <Switch>

          {/* home route  */}
					<Route exact path="/">
						<Shop></Shop>
          </Route>

          {/* shop route  */}
					<Route exact path="/shop">
						<Shop></Shop>
          </Route>

          {/* order route  */}
					<Route exact path="/order">
						<OrderReview></OrderReview>
          </Route>

          {/* Inventory route  */}
					<Route exact path="/inventory">
						<Inventory></Inventory>
          </Route>

          {/* not found route  */}
					<Route exact path="*">
						<NotFound></NotFound>
          </Route>




          
				</Switch>
			</Router>
		</div>
	);
}

export default App;
