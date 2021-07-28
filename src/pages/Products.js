import { Row, Col } from "antd";
import styles from "../components/Container.module.css";
import { dummyProducts } from "../components/dummyProducts";
import ProductCard from "../components/products/ProductCard";
import classNames from "classnames";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className={classNames(styles.container, styles.bg)}>
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        {" "}
        <h1>Store</h1>
        <p>This is store page</p>
      </div>
      <Row gutter={[16, 16]}>
        {dummyProducts.map((product) => (
          <Col key={product.id} span={6}>
            <Link to={`/products/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default Products;
