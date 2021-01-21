const CART = 'CART'; // Magic String
const defaultEmptyCart = [];
import { findById } from './utils.js';

export function getCart() {
    const stringyCart = localStorage.getItem(CART);

    // only go grab the cart from localStorage if there IS a cart in localStorage
    if (stringyCart) {
        // if there is a cart in local storage, parse it
        const parsedCart = JSON.parse(stringyCart);

        // then return it
        return parsedCart;    
    } else {
        // 1) initialize a cart
        // if there is no cart, go ahead and stringify our default empty cart
        const stringyDefaultCart = JSON.stringify(defaultEmptyCart);
        // then put that stringified empty cart in local storage
        localStorage.setItem(CART, stringyDefaultCart);

        // 2) give the user a cart play with
        // then, forget about local storage. just give the user a default empty cart
        return defaultEmptyCart;
    }
}

export function clearCart() {
    const stringyDefaultCart = JSON.stringify(defaultEmptyCart);

    localStorage.setItem(CART, stringyDefaultCart);
}

export function setCart(cart) {
    const stringyCart = JSON.stringify(cart);

    localStorage.setItem(CART, stringyCart);
}

export function addToCart(id) {
    // 0) Get the cart from localStorage
    const cart = getCart();

    // 1) Check if an item with this ID is already in the cart. 
    const cartItem = findById(id, cart);
    //   - If so, increment the quantity
    if (cartItem) {
        cartItem.quantity++;
    } else {
        //   - If it's not in the cart, put one in there with a quantity of 1.
        const newItem = {
            id: id,
            quantity: 1
        };

        cart.push(newItem);
    }

    setCart(cart);
}