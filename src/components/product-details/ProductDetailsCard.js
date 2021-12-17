import { useContext } from "react";
import { useParams } from "react-router-dom";

import productsContext from "../../context/productsContext";

const ProductDetailsCard = () => {
  const { productId } = useParams();
  const { products } = useContext(productsContext);

  const product = products.find((product) => {
    return product.id === Number(productId);
  });

  return (
    <div>
      <div>
        <img
          src={product?.prodPic}
          alt={`Profile of ${product?.category}${product?.title}.`}
        />
      </div>
      <div>
        <p>
          {product?.category} 
          <dd> 
          {product?.title}
          </dd>
        </p>
        <dl>
          <dt>Price:</dt>
          <dd>{product?.price}</dd>
          <p></p>
          <dt>Quantity:</dt>
          <dd>{product?.quantity}</dd>
          <p></p>
          <dt>Description:</dt>
          <dd>{product?.description}</dd>
          <p></p>
        </dl>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
