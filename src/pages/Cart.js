import { Link } from "react-router-dom";
import { Row, Col, Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import CartItem from "../components/cart/CartItem";
import containerStyles from "../components/Container.module.css";
import cartStyles from "./Cart.module.css";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
const Cart = () => {
  const { cartProducts } = useContext(CartContext);
  return (
    <div className={containerStyles.container}>
      <div style={{ textAlign: "center" }}>
        <h1>CART </h1>
        <p>This is cart page</p>
      </div>
      <Row>
        <Col>
          {cartProducts.length ? (
            cartProducts.map((product) => (
              <CartItem key={product.id} product={product} />
            ))
          ) : (
            <h1>You have no product in cart </h1>
          )}
        </Col>
        {cartProducts.length && (
          <Col>
            <div className={cartStyles.totalCard}>
              <h2>Total items</h2>
              <p>{cartProducts.length}</p>
              <h2>Total Payment</h2>
              <h1>
                {cartProducts
                  .reduce((total, product) => {
                    return (total += product.price);
                  }, 0)
                  .toFixed(3)}
              </h1>
              <Button danger> CHECKOUT</Button>
              <Button danger style={{ marginLeft: "10px" }}>
                clear
              </Button>
            </div>
          </Col>
        )}
      </Row>
      <hr />
      <Link to="/">
        <Button type="primary">
          <ArrowLeftOutlined />
          Back to home
        </Button>
      </Link>
    </div>
  );
};
export default Cart;
