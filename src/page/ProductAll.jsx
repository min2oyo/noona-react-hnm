import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../component/ProductCard";
import { productAction } from "../redux/actions/productAction";

const ProductAll = () => {

  // 변수
  const dispatch = useDispatch();                               // 리덕스
  const productlist = useSelector(state => state.productlist);  // 상품 목록
  const [query, setQuery] = useSearchParams();                  // 검색 결과

  // 함수
  const getProducts = () => { // 상품 목록 API
    dispatch(productAction.getProducts(query));
  };

  // 실행
  useEffect(() => {
    getProducts();
  }, [query]);

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