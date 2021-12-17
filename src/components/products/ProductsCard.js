import { useContext } from "react";
import "./../../app.css";
import "./ProductCard.css";
import styled from "styled-components";
//import { DeleteProduct } from "../../utils/products";

import { Link } from "react-router-dom";

import ProductsContext from "../../context/productsContext";

const Card = styled.div`
  background-color: #fff;
  box-shadow: 2px 5px 5px 5px rgba(0, 0, 0, 0.2);
  margin: 30px;
  padding: 20px;
  display: flex;
`;

const CloseButton = styled.button`
  background-color: #999;
  color: #fff;
  border: 0;
  border-radius: 100%;
  font-weight: bold;
  height: 50px;

  &:hover {
    background-color: salmon;
    cursor: pointer;
  }
`;

const ProductCard = ({
  id = "",
  category = "",
  title = "",
  price = "",
  prodPic = "",
}) => {
  const { removeProduct } = useContext(ProductsContext);

  return (
    <Link to={`products/${id}`}>
      <Card>
        <div className="ProductCart_margin"></div> 
        <div className="flex flex-1">
          <div className="ProductCard__left">
            <img
              className="ProductCard__photo"
              src={prodPic}
              alt={`Profile of ${category} ${title}.`}
            />
          </div>
          <div className="ProductCard__right">
            <p>
              
              {category}<div className="Space">{title}</div>
            </p>
            <p>{price}</p>
          </div>
        </div>
        <div className="flex align-items-center">
          <CloseButton
            onClick={() => {
              removeProduct(id);
            }}
          >
            Delete
            
          </CloseButton>
        </div>
      </Card>
    </Link>
  );
};


export default ProductCard;
