import { useContext } from "react";
import "./../../app.css";
import "./CartCard.css";
import styled from "styled-components";

import { Link } from "react-router-dom";

import CartsContext from "../../context/cartsContext";

const Card = styled.div`
  background-color: #fff;
  box-shadow: 2px 5px 5px 5px rgba(0, 0, 0, 0.2);
  margin-Left: 40%;
  margin-Right: 10%;
  padding: 20px;
  display: flex;
`;

const CloseButton = styled.button`
  background-color: #999;
  color: #fff;
  border: 0;
  border-radius: 100%;
  font-weight: bold;
  font-size: 20px;

  &:hover {
    background-color: red;
    cursor: pointer;
  }
`;

const total = 0;

const CartCard = ({
  id = "",
  category = "",
  title = "",
  price = "",
  prodPic = "",
}) => {
  const { removeCart } = useContext(CartsContext);

  return (
    <Link to={`carts/${id}`}>
      <div className="CartList">
        SHOPPING CART ITEM: <p>{id}</p>
      </div>
      <Card>
        <div className="CartCard_margin"></div>
        <div className="flex flex-1">
          <div className="CartCard__left">
            <img
              className="CartCard__photo"
              src={prodPic}
              alt={`Profile of ${category} ${title}.`}
            />
          </div>
          <div className="CartCard__right">
         
              {category} {title}
              <div>
           ${price} </div>
          </div>
        </div>
        <div className="flex align-items-center">
          <CloseButton
            onClick={() => {
        //      removeCart(id);
            }}
          
          >
            DELETE     
          </CloseButton>
        </div>
      </Card>
    </Link>
  );
};

export default CartCard;
