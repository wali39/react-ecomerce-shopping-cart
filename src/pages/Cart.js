import { Row, Col, Button } from "antd";
import CartItem from "../components/cart/CartItem";
import containerStyles from "../components/Container.module.css";
import cartStyles from "./Cart.module.css";
const Cart = () => {
  return (
    <div className={containerStyles.container}>
      <div style={{ textAlign: "center" }}>
        <h1>CART </h1>
        <p>This is cart page</p>
      </div>
      <Row>
        <Col>
          <CartItem />
          <CartItem />
          <CartItem />
        </Col>
        <Col>
          <div className={cartStyles.totalCard}>
            <h2>Total items</h2>
            <p>5</p>
            <h2>Total Payment</h2>
            <h1>BDT 1234</h1>
            <Button danger> CHECKOUT</Button>
            <Button danger style={{ marginLeft: "10px" }}>
              {" "}
              clear
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Cart;
