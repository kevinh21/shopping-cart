import { useContext } from "react";
import ProductCard from "./ProductsCard";

import ProductsContext from "../../context/productsContext";

const ProductList = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div> 
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          category={product.category}
          title={product.title}
          price={product.price}
          prodPic={product.prodPic}
        />
      ))}
    </div>
  );
};

export default ProductList;
