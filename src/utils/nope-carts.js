import { v4 as uuidv4 } from 'uuid';

export const getCarts = () => {
    const carts = JSON.parse(localStorage.getItem('carts')) ?? [];
    return carts;
}

export const createCart = ({ category, title, price, quantity, description, prodPic }) => {
    const carts = JSON.parse(localStorage.getItem('carts')) ?? [];

    const newCart = {
        id: uuidv4(),
        category,
        title,
        price,
        quantity,
        description,
        prodPic
    };

    carts.push(newCart);
    localStorage.setItem('carts', JSON.stringify(carts));
    
    return newCart;
}

export const deleteCart = (id) => {
    const carts = JSON.parse(localStorage.getItem('carts')) ?? [];
    const newCarts = carts.filter((cart) => cart.id !== id);
    localStorage.setItem('carts', JSON.stringify(newCarts));
}
