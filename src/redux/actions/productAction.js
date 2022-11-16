// 상품 목록 API
function getProducts(query) {
  return async (dispatch, getState) => {
    // let url = `https://my-json-server.typicode.com/min2oyo/noona-react-hnm/products?q=${query.get(`q`) || ``}`; // JSON Server에서 필터링
    let url = `http://localhost:3004/products?q=${query.get(`q`) || ``}`; // JSON Server에서 필터링
    let data = await (await fetch(url)).json();
    console.log(`data: `, data);
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
  };
}

export const productAction = { getProducts };