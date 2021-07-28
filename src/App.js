import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartItem from "./components/cart/CartItem";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Products from "./pages/Products";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Products} exact />
        <Route path="/products/:id" component={Product} exact />
        <Route path="/cart" component={Cart} exact />
      </Switch>
    </Router>
  );
}

export default App;
