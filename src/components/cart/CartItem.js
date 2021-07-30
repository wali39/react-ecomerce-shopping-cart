import { Button, Radio, Row, Col, Space } from "antd";
import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import styles from "./CartItem.module.css";
import { priceformat } from "../../utils/PriceFormat";
import { CartContext } from "../../context/CartContext";
import { useContext, useEffect, useState } from "react";

const CartItem = ({ product }) => {
  const { increase, decrease } = useContext(CartContext);
  const [buttonStatus, setbuttonStatus] = useState(false);
  useEffect(() => {
    if (product.quantity == 1) {
      setbuttonStatus(true);
    } else {
      setbuttonStatus(false);
    }
  }, [increase, decrease]);

  return (
    <Row>
      <Row
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
        gutter={[32, 32]}
      >
        <Col>
          <div className={styles.cartImage}>
            <img src={product.photo} />
          </div>
        </Col>
        <Col>
          <div>
            <h3>{product.name} </h3>
            <p>{priceformat(product.price)}</p>
          </div>
        </Col>
        <Col>
          <div style={{ textAlign: "center" }}>
            <h3>Qty: {product.quantity}</h3>
          </div>
        </Col>
        <Col>
          <Space size={34} direction="horizontal">
            <Radio.Group>
              <Radio.Button
                onClick={() => {
                  increase(product);
                }}
              >
                <PlusOutlined />
              </Radio.Button>
              <Radio.Button>{product.quantity}</Radio.Button>
              <Radio.Button
                disabled={buttonStatus}
                onClick={() => decrease(product)}
              >
                <MinusOutlined />
              </Radio.Button>
            </Radio.Group>
            <Button danger shape="circle">
              <DeleteOutlined />
            </Button>
          </Space>
        </Col>
      </Row>
    </Row>
  );
};

export default CartItem;
