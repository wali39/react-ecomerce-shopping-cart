import { Row, Col, Image, Button, Space } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import ButtonGroup from "antd/lib/button/button-group";
import { useState } from "react";
import { priceformat } from "../../utils/PriceFormat";
import styles from "../Container.module.css";
import { Link } from "react-router-dom";
const ProductDetailsCard = ({ product }) => {
  const [imageSrc, setImageSrc] = useState(product.photo);
  const handleImage = (imageSrc) => {
    setImageSrc(imageSrc);
  };
  const imageArray = ["/img/2.jpg", "/img/3.jpg", "/img/4.jpg", "/img/5.jpg"];

  return (
    <Row style={{ marginTop: "50px" }}>
      <Col span={14}>
        <div
          className={styles.imageWrapper}
          style={{
            maxWidth: "500px",
            maxHeight: "500px",
            overflow: "hidden",
            margin: "0 auto",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              background: "rgba(128, 128, 128, 0.3)",
            }}
          >
            <Image
              src={imageSrc}
              style={{ objectFit: "contain", height: "300px" }}
            />
          </div>

          <Row gutter={[6, 6]} style={{ marginTop: "10px" }}>
            {imageArray.map((imageSrc, index) => (
              <Col key={index} span={6}>
                <img
                  src={imageSrc}
                  onClick={() => handleImage(imageSrc)}
                  alt="product img"
                />
              </Col>
            ))}
          </Row>
        </div>
      </Col>
      <Col span={10}>
        <Space size={30} direction="vertical">
          <h1>{product.name}</h1>
          <b>{priceformat(product.price)}</b>

          <p style={{ fontSize: "18px" }}>{product.description}</p>
          <ButtonGroup>
            <Button danger>+</Button>
            <Button danger>1</Button>
            <Button danger> - </Button>
          </ButtonGroup>

          <Button size="large" danger>
            ADD to Cart
          </Button>
          <Link to="/">
            <Button type="primary">
              <ArrowLeftOutlined />
              Back to home
            </Button>
          </Link>
        </Space>
      </Col>
    </Row>
  );
};

export default ProductDetailsCard;
