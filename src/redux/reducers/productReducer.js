import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  productList: [],
  selectedItem: null
};

const productSlice = createSlice({
  name: `product`,
  initialState,
  reducers: {
    getAllProducts(state, action) {   // 상품 전체 목록
      state.productList = action.payload.data;
    },
    getSingleProduct(state, action) { // 상품 1개 정보
      state.selectedItem = action.payload.data;
    }
  }
});

export const productActions = productSlice.actions;
export default productSlice.reducer;