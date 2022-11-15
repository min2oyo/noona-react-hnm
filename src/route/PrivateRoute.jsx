import { Navigate } from "react-router-dom";
import ProductDetail from "../page/ProductDetail";

const PrivateRoute = ({ authenticate }) => {

  // 검증
  return authenticate ? <ProductDetail /> : <Navigate to='/login' />;

};

export default PrivateRoute;;