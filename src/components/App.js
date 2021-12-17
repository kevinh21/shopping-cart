/*checkout was register
cart was login*/

import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ProductsPage from "./products";
import ProductDetailsPage from "./product-details";
import ProductCreatePage from "./product-create";
import { getProducts } from "../utils/products";
import CartPage from "./cart";
import { getCarts } from "../utils/cart";
// TODO import CheckoutPage from "./checkout";

import CartsContext from "../context/cartsContext";
import ProductsContext from "./../context/productsContext";


const shopCarts = [
  {
    id: 1,
    prodPic:
      "https://www.meijer.com/content/dam/meijer/product/0066/02/2000/58/0066022000589_1_A1L1_0600.png",
    title: "Kiwi",
    price: "1.99",
    quantity: "10",
  },
  {
    id: 2,
    prodPic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe5DFz4SEH3i5nktH7s0O1eEzNxY8lsedCFQ&usqp=CAU",
    title: "Strawberries",
    price: "8.99",
    quantity: "38",
  },
  {
    id: 3,
    prodPic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsyRRBBDCB7AU34MQcEQ9VCVSdylAvxjybNA&usqp=CAU",
    title: "Dragon Fruit",
    price: 6.69,
    quantity: 15,
  },
  {
    id: 4,
    prodPic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT68b0O5wgNnMvg2hrPVjD4cRADRiFNcmXHvQ&usqp=CAU",
    title: "Bananna",
    price: 3.79,
    quantity: 36,
  },
];

const mockProducts = [
  {
    id: 1,
    category: "Fruit:",
    title: "Mango",
    prodPic: "https://i.pravatar.cc/300?u=1",
    price: "1.99",
    quantity: "10",
    description: " So very fresh! Picked from the tree",
  },
  {
    id: 2,
    category: "Pasta: ",
    title: "Lasagna",
    prodPic: "https://i.pravatar.cc/300?u=2",
    price: "1.29",
    quantity: "13",
    description: "Made fresh daily using Grandma-Italy's recipe ",
  },
  {
    id: 3,
    category: "Bourbon:  ",
    title: "Knob Creek",
    prodPic: "https://i.pravatar.cc/300?u=3",
    price: "28.99",
    quantity: "16",
    description: "Kentucky is Famous for Knob Creek Bourbon",
  },
  {
    id: 4,
    category: "Vegetable:",
    title: "Red Leaf Lettuce",
    prodPic: "https://i.pravatar.cc/300?u=4",
    price: "2.39",
    quantity: "23",
    description: "Grown Organically using",
  },
];

function App(props) {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const storedProducts = getProducts();
    setProducts(storedProducts.length ? storedProducts : mockProducts);
  }, []);

  useEffect(() => {
    const storedCarts = getCarts();
    setCarts(storedCarts.length ? storedCarts : shopCarts);
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products: products,
        addProduct: (product) => {
          setProducts([...products, product]);
        },

        // removeProduct: (mockProducts) => {
        // //  console.log("REMOVE product with", productId);
        //   // TODO: remove from array by using filter or other method          
        // const deleteProdduct = (mockProducts) => {
        //     const newItems = mockProducts.filter((id) => id !== id)
        //     setProducts(newItems);
        //   };
        // },

      }}
    >

<CartsContext.Provider
      value={{
        carts: carts,
        showCart: (cart) => {
          setCarts([...carts, cart]);
        },

      }}
    >
      <div style={{ backgroundColor: "#f88" }}>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/products">Products List</Link>
              </li>

              <li>
                <Link to="/new-product">Create Products</Link>
              </li>

              <li>
                <Link to="/Cart-Page">Shopping Cart</Link>
              </li>

            </ul>
          </nav>

          <Switch>
         
            <Route path="/products/:productId">
              <ProductDetailsPage />
            </Route>

            <Route path="/new-product">
              <ProductCreatePage />
            </Route>

            <Route path="/Cart-Page">
              <CartPage />
            </Route>

            <Route path="/">
              <ProductsPage />
            </Route>

          </Switch>
        </Router>
      </div>
      </CartsContext.Provider>
    </ProductsContext.Provider>

  );
}

export default App;
