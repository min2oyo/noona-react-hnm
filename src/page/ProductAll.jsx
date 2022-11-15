import { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";

const ProductAll = () => {

  // 변수
  const [productlist, setProductlist] = useState(null); // 상품 목록

  // 함수
  const getProducts = async () => { // 상품 목록 API
    let url = `http://localhost:3004/products`;
    let data = await (await fetch(url)).json();
    console.log(`data: `, data);
    setProductlist(data);
  };

  // 실행
  useEffect(() => {
    getProducts();
  }, []);

  // 출력
  return (
    <>
      <h2>전체 상품 페이지</h2>
      <ProductCard />
    </>
  );

};

export default ProductAll;