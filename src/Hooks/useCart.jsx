import { useState, useEffect } from 'react';

export const useCart = () => {
  const [isMinicartOpen, setMinicartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsInStorage, setCartItemsInStorage] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItemsInStorage(storedCart);
    setCartItems(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItemsInStorage));
  }, [cartItemsInStorage]);

  const openModal = () => {
    setMinicartOpen(true);
  };

  const closeModal = () => {
    setMinicartOpen(false);
  };

  const addToCart = (data) => {
    const newItem = {
      id: data.id,
      image: data.image,
      title: data.title,
      price: data.price,
      quantity: 1,
    };

    const existingItem = cartItems.find((item) => item.id === data.id);

    if (existingItem) {
      newItem.quantity = existingItem.quantity + 1;
      const updatedCart = cartItems.map((item) =>
        item.id === data.id ? newItem : item,
      );
      setCartItems(updatedCart);
      setCartItemsInStorage(updatedCart);
    } else {
      const updatedCart = [...cartItems, newItem];
      setCartItems(updatedCart);
      setCartItemsInStorage(updatedCart);
    }
  };

  return {
    isMinicartOpen,
    cartItems,
    openModal,
    closeModal,
    addToCart,
    removeFromCart: (itemId) =>
      removeFromCart(cartItems, setCartItems, setCartItemsInStorage, itemId),
    updateCartItemQuantity: (itemId, newQuantity) =>
      updateCartItemQuantity(
        cartItems,
        setCartItems,
        setCartItemsInStorage,
        itemId,
        newQuantity,
      ),
  };
};

export const removeFromCart = (
  cartItems,
  setCartItems,
  setCartItemsInStorage,
  itemId,
) => {
  const updatedCart = cartItems.filter((item) => item.id !== itemId);
  setCartItems(updatedCart);
  setCartItemsInStorage(updatedCart);
};

export const updateCartItemQuantity = (
  cartItems,
  setCartItems,
  setCartItemsInStorage,
  itemId,
  newQuantity,
) => {
  const updatedCart = cartItems.map((item) =>
    item.id === itemId ? { ...item, quantity: newQuantity } : item,
  );
  setCartItems(updatedCart);
  setCartItemsInStorage(updatedCart);
};
