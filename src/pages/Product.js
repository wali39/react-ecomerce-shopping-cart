import { useParams } from "react-router-dom";
import styles from "../components/Container.module.css";
import ProductDetailsCard from "../components/products/ProductDetailsCard";
import { dummyProducts } from "../components/dummyProducts";

const Product = () => {
  const { id } = useParams();

  const product = id && dummyProducts.find((product) => product.id == id);

  return (
    <div className={styles.container}>
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1>Product Details </h1>
        <p>This is product details page</p>
      </div>
      <ProductDetailsCard product={product} />
    </div>
  );
};
export default Product;
