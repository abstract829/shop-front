import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { Product } from "../interfaces/interfaces";

export interface ProductCart {
  product: Product;
  quantity: number;
}

export interface Cart {
  cart: ProductCart[];
  pushToCart: ({}: ProductCart) => void;
  updateQuantity: ({}: ProductCart) => void;
  getTotalPrice: () => number;
}

export const CartContext = createContext<Cart>({} as Cart);

interface props {
  children: ReactNode;
}

const CartProvider: FC<props> = ({ children }) => {
  const [cart, setCart] = useState<ProductCart[]>([]);

  // useEffect(() => {
  //   console.log({ cart });
  // }, [cart]);

  const pushToCart = ({ product, quantity }: ProductCart) => {
    if (quantity <= 0) return;
    const isInCart = cart.find((item) => item.product.id === product.id);
    if (isInCart) {
      setCart((prev) =>
        prev.filter((item) => item.product.id !== isInCart.product.id)
      );
      setCart((prev) => [
        ...prev,
        { product, quantity: quantity + isInCart.quantity },
      ]);
    } else {
      setCart((prev) => [...prev, { product, quantity }]);
    }
  };
  const updateQuantity = ({ product, quantity }: ProductCart) => {
    if (quantity <= 0) return;
    const productToUpdate = cart.find((item) => item.product.id === product.id);
    if (productToUpdate) {
      setCart((prev) =>
        prev.filter((item) => item.product.id !== productToUpdate.product.id)
      );
      setCart((prev) => [...prev, { product, quantity: quantity }]);
    }
  };
  const getTotalPrice = () => {
    let total = 0;
    cart.forEach((cartItem) => {
      total += cartItem.product.price * cartItem.quantity;
    });
    return total;
  };
  return (
    <CartContext.Provider
      value={{ cart, pushToCart, updateQuantity, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
