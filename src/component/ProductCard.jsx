import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {

  // 변수
  const navigate = useNavigate(); // 이동

  // 함수
  const showDetail = () => {  // 상품 클릭
    navigate(`/product/${item?.id}`);
  };

  // 출력
  return (
    <>
      <div onClick={showDetail}>
        <img src={item?.img} />
        <div>{item?.choice ? `추천` : ``}</div>
        <div>{item?.title}</div>
        <div>￦{item?.price}</div>
        <div>{item?.new ? `신제품` : ``}</div>
      </div>
    </>
  );

};

export default ProductCard;