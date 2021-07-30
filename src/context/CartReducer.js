import { dummyProducts } from "../components/dummyProducts";
const setCart = (cartProducts) =>
  localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

const CartRuducer = (state, action) => {
  let price;

  {
    dummyProducts.map((product) => {
      if (product.id === action.payload.id) {
        return (price = product.price);
      }
    });
  }

  switch (action.type) {
    case "add-product":
      if (
        state.cartProducts.map((product) => product.id !== action.payload.id)
      ) {
        state.cartProducts.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        ...setCart(state.cartProducts),
        cartProducts: [...state.cartProducts],
      };
    case "increase":
      const index = state.cartProducts.findIndex(
        (product) => product.id === action.payload.id
      );
      state.cartProducts[index].quantity += 1;

      state.cartProducts[index].price =
        price * state.cartProducts[index].quantity;
      return {
        ...state,
        ...setCart(state.cartProducts),
        cartProducts: [...state.cartProducts],
      };

    case "decrease":
      const indexD = state.cartProducts.findIndex(
        (product) => product.id === action.payload.id
      );
      const singleProductPrice =
        state.cartProducts[indexD].price / state.cartProducts[indexD].quantity;
      state.cartProducts[indexD].quantity--;
      state.cartProducts[indexD].price -= singleProductPrice;

      return {
        ...state,
        ...setCart(state.cartProducts),
        cartProducts: [...state.cartProducts],
      };
  }
};

export default CartRuducer;
