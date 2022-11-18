import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {

  // 변수
  let { id } = useParams(); // 상품 ID
  const [product, setProduct] = useState(null); // 상품 상세 정보

  // 함수
  const getProductDetail = async () => {  // 상품 상세 정보 API
    let url = `https://my-json-server.typicode.com/min2oyo/noona-react-hnm/products/${id}`;
    // let url = `http://localhost:3004/products/${id}`;
    let data = await (await fetch(url)).json();
    console.log(`data`, data);
    setProduct(data);
  };

  // 실행
  useEffect(() => {
    getProductDetail();
  }, []);

  // 출력
  return (
    <>
      <Container>
        <Row>
          <Col className="product-img">
            <img src={product?.img} />
          </Col>
          <Col>
            <div>{product?.title}</div>
            <div>{product?.price}</div>
          </Col>
        </Row>
      </Container>
    </>
  );

};

export default ProductDetail;