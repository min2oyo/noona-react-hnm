import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
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
      <Container>
        <Row>
          {productlist?.map(item => (
            <Col key={item?.id} lg={3}><ProductCard item={item} /></Col>
          ))}
        </Row>
      </Container>
    </>
  );

};

export default ProductAll;