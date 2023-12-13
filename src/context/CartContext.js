import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  cart: [],
  totalQuantity: 0, // Add totalQuantity to the context
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error("El Producto ya fue agregado.");
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  // Calcular total
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      const totalPrice = cart.reduce(
        (accumulator, currentItem) =>
          accumulator + currentItem.price * currentItem.quantity,
        0
      );
      setTotal(totalPrice);
    };

    calculateTotal();
  }, [cart]);

  // Calcular totalQuantity 
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const calculateTotalQuantity = () => {
      const quantity = cart.reduce(
        (accumulator, currentItem) => accumulator + currentItem.quantity,
        0
      );
      setTotalQuantity(quantity);
    };

    calculateTotalQuantity();
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
