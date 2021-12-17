import { v4 as uuidv4 } from 'uuid';

export const getProducts = () => {
    const products = JSON.parse(localStorage.getItem('products')) ?? [];
    return products;
}

export const createProduct = ({ category, title, price, quantity, description, prodPic }) => {
    const products = JSON.parse(localStorage.getItem('products')) ?? [];

    const newProduct = {
        id: uuidv4(),
        category,
        title,
        price,
        quantity,
        description,
        prodPic
    };

    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));
    
    return newProduct;
}

export const deleteProduct = (id) => {
    const products = JSON.parse(localStorage.getItem('products')) ?? [];
    const newProducts = products.filter((product) => product.id !== id);
    localStorage.setItem('products', JSON.stringify(newProducts));
}
