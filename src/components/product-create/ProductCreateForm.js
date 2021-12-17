import React, { useState, useContext } from "react";

import ProductsContext from "./../../context/productsContext";

import { v4 as uuidv4 } from "uuid";

function ProductCreateForm() {
  const { addProduct } = useContext(ProductsContext);

  const [product, setProduct] = useState({
    category: "",
    title: "",
    price: "",
    quantity: "",
    description: "",
    prodPic: "",
  });

  function handleInputChange(event) {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
// KH need to edit here for link to products display
       const id = uuidv4();

    addProduct({ ...product, id: id });
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <img src={product.prodPic} alt="Product form" />
      </div>
      <div>
        <div>
          <input
            type="text"
            placeholder="Category"
            name="category"
            value={product.category}
            onChange={handleInputChange}
          />
          <p></p>
        </div>
        <div>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={product.title}
            onChange={handleInputChange}
          />
                    <p></p>

        </div>
        <div>
          <input
            type="number"
            placeholder="Price"
            name="price"
            value={product.price}
            onChange={handleInputChange}
          />
                    <p></p>
        </div>
        <div>
          <input
            type="number"
            placeholder="Quantity"
            name="quantity"
            value={product.quantity}
            onChange={handleInputChange}
          />
                    <p></p>

        </div>
        <div>
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={product.description}
            onChange={handleInputChange}
          />
                    <p></p>

        </div>
        <div>
          <input
            type="text"
            placeholder="Product Picture Url"
            name="prodPic"
            value={product.prodPic}
            onChange={handleInputChange}
          />
                    <p></p>
        </div>
        <div>
          <button type="submit">Add Product</button>          
        </div>
      </div>
    </form>
  );
}

export default ProductCreateForm;
