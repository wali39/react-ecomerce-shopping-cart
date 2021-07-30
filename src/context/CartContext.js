import { createContext, useReducer } from "react";
import CartRuducer from "./CartReducer";
export const CartContext = createContext();
const storage = localStorage.getItem("cartProducts")
  ? JSON.parse(localStorage.getItem("cartProducts"))
  : [];
const initialState = {
  cartProducts: storage,
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartRuducer, initialState);
  const handleProductAdd = (payload) => {
    dispatch({ type: "add-product", payload: payload });
  };
  const increase = (payload) => {
    dispatch({ type: "increase", payload: payload });
  };
  const decrease = (payload) => {
    dispatch({ type: "decrease", payload: payload });
  };

  const contextValues = {
    handleProductAdd,
    increase,
    decrease,
    ...state,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
