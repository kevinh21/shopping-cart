
/* checkout was register*/
/* cart was login */ 


import React, { useState, useContext } from "react";

import CartsContext from "./../../context/cartsContext";

import { v4 as uuidv4 } from "uuid";

function CartCreateForm() {
  const { addCart } = useContext(CartsContext);

  const [cart, setCart] = useState({
    category: "",
    title: "",
    price: "",
    quantity: "",
    description: "",
    prodPic: "",
  });

  function handleInputChange(event) {
    setCart({
      ...cart,
      [event.target.name]: event.target.value,
    });
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    console.log("FORM SUBMITTED", cart);

    const id = uuidv4();

    addCart({ ...cart, id: id });
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <img src={cart.prodPic} alt="Product preview." />
      </div>
      <div>
        <div>
          <input
            type="text"
            placeholder="Category"
            name="category"
            value={cart.category}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={cart.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Price"
            name="price"
            value={cart.price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="quantity"
            placeholder="Quantity"
            name="quantity"
            value={cart.quantity}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={cart.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Product Picture Url"
            name="prodPic"
            value={cart.prodPic}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">Add Cart</button>
        </div>
      </div>
    </form>
  );
}

export default CartCreateForm;
