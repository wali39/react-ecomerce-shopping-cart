import { Button, Radio, Row, Col, Space } from "antd";
import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import styles from "./CartItem.module.css";
const CartItem = () => {
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
            <img src="/img/1.jpg" />
          </div>
        </Col>
        <Col>
          <div>
            <h3>thi is demo name of product </h3>
            <p>BDT 2031</p>
          </div>
        </Col>
        <Col>
          <div style={{ textAlign: "center" }}>
            <h3>Qty: 4</h3>
          </div>
        </Col>
        <Col>
          <Space size={34} direction="horizontal">
            <Radio.Group>
              <Radio.Button>
                <PlusOutlined />
              </Radio.Button>
              <Radio.Button>1</Radio.Button>
              <Radio.Button>
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
