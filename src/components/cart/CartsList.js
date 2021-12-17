import { useContext } from "react";
import CartCard from "./CartsCard";

import CartsContext from "../../context/cartsContext";

const CartList = () => {
  const { carts } = useContext(CartsContext);

  return (
    <div> 
      {carts.map((cart) => (
        <CartCard
          key={cart.id}
          id={cart.id}
          category={cart.category}
          title={cart.title}
          price={cart.price}
          prodPic={cart.prodPic}
        />
      ))}
    </div>
  );
};

export default CartList;
