import { useContext } from "react";
import { useParams } from "react-router-dom";

import cartsContext from "../../context/cartsContext";

const CartDetailsCard = () => {
  const { cartId } = useParams();
  const { carts } = useContext(cartsContext);

  const cart = carts.find((cart) => {
    return cart.id === Number(cartId);
  });

  return (
    <div>
      <div>
        <img
          src={cart?.prodPic}
          alt={`Profile of ${cart?.category}${cart?.title}.`}
        />
      </div>
      <div>
        <p>
          {cart?.category}
          <dd>{cart?.title}</dd>
        </p>
        <dl>
          <dt>Price:</dt>
          <dd>{cart?.price}</dd>
          <p></p>
          <dt>Quantity:</dt>
          <dd>{cart?.quantity}</dd>
          <p></p>
          <dt>Description:</dt>
          <dd>{cart?.description}</dd>
          <p></p>
        </dl>
      </div>
    </div>
  );
};

export default CartDetailsCard;
