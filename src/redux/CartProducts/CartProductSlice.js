import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartProducts: {
    cartProducts: [],
    total: 0,
    discount: 10,
    totalBill: 0,
  },
};
const CartProductSlice = createSlice({
  name: "cartProducts",
  initialState,
  reducers: {
    IncreamentCartProduct: (state, { payload }) => {
      const found = state.cartProducts.cartProducts.some(
        (item) => item.productId === payload.productId
      );
      let quantity = { quantity: 1 };
      if (!found) {
        const obj = { ...payload, ...quantity };
        state.cartProducts.cartProducts.push(obj);
        state.cartProducts.total = state.cartProducts.total + obj.productPrice;
      } else {
        // let result=state.cartProducts.cartProducts.map(el => el.bar == payload.productId  ? {...el, quantity:el.quantity+1} : el);
        const index = state.cartProducts.cartProducts.findIndex((obj) => {
          return obj.productId === payload.productId;
        });
        state.cartProducts.cartProducts[index].quantity =
          state.cartProducts.cartProducts[index].quantity + 1;
        state.cartProducts.total =
          state.cartProducts.total +
          state.cartProducts.cartProducts[index].productPrice;
        // state.cartProducts.cartProducts=result
      }
      if (state.cartProducts.total > state.cartProducts.discount) {
        state.cartProducts.totalBill =
          state.cartProducts.total - state.cartProducts.discount;
      } else {
        state.cartProducts.totalBill = state.cartProducts.total;
      }

      // state.cartProducts.totalBill=Number(state.cartProducts.totalBill).toFixed(2);
      // state.cartProducts.total=Number(state.cartProducts.total).toFixed(2);

    },
    DecreamentCartProduct: (state, { payload }) => {
      // const found = state.cartProducts.cartProducts.some(item => item.productId === payload.productId);
      const index = state.cartProducts.cartProducts.findIndex((obj) => {
        return obj.productId === payload.productId;
      });
      if (state.cartProducts.cartProducts[index].quantity <= 1) {
        //delete
        const prod_id = state.cartProducts.cartProducts[index].productId;
        state.cartProducts.total =
          state.cartProducts.total -
          state.cartProducts.cartProducts[index].productPrice;
        const filtered = state.cartProducts.cartProducts.filter((element) => {
          return element.productId !== prod_id;
        });
        state.cartProducts.cartProducts = filtered;
      } else {
        state.cartProducts.cartProducts[index].quantity =
          state.cartProducts.cartProducts[index].quantity - 1;
        state.cartProducts.total =
          state.cartProducts.total -
          state.cartProducts.cartProducts[index].productPrice;
      }
      if (state.cartProducts.total > state.cartProducts.discount) {
        state.cartProducts.totalBill =
          state.cartProducts.total - state.cartProducts.discount;
      } else {
        state.cartProducts.totalBill = state.cartProducts.total;
      }
      // state.cartProducts.totalBill=Number(state.cartProducts.totalBill).toFixed(2);
      // state.cartProducts.total=Number(state.cartProducts.total).toFixed(2);
    },
    RemoveCartProduct: (state, { payload }) => {
      const index = state.cartProducts.cartProducts.findIndex((obj) => {
        return obj.productId === payload;
      });
      state.cartProducts.total =
        state.cartProducts.total -
        state.cartProducts.cartProducts[index].productPrice *
          state.cartProducts.cartProducts[index].quantity;
      const filtered = state.cartProducts.cartProducts.filter((element) => {
        return element.productId !== payload;
      });
      state.cartProducts.cartProducts = filtered;
      if (state.cartProducts.total > state.cartProducts.discount) {
        state.cartProducts.totalBill = state.cartProducts.total - state.cartProducts.discount;
      } else {
        state.cartProducts.totalBill = state.cartProducts.total;
      }
      // state.cartProducts.totalBill=Number(state.cartProducts.totalBill).toFixed(2);
      // state.cartProducts.total=Number(state.cartProducts.total).toFixed(2);
    },
  },
});

export const {
  IncreamentCartProduct,
  DecreamentCartProduct,
  RemoveCartProduct,
} = CartProductSlice.actions;
export default CartProductSlice.reducer;
