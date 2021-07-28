import { Card } from "antd";

const { Meta } = Card;
const ProductCard = ({ product: { photo, name, price } }) => {
  return (
    <div>
      <Card
        hoverable
        cover={
          <img
            alt="example"
            src={photo}
            style={{ objectFit: "contain", height: "250px" }}
          />
        }
      >
        <Meta title={name} description={`৳  ${price}`} />
      </Card>
    </div>
  );
};

export default ProductCard;
