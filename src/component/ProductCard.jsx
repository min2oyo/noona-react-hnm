const ProductCard = ({ item }) => {

  // 출력
  return (
    <>
      <img src={item?.img} />
      <div>{item?.choice ? `추천` : ``}</div>
      <div>{item?.title}</div>
      <div>￦{item?.price}</div>
      <div>{item?.new ? `신제품` : ``}</div>
    </>
  );
};

export default ProductCard;