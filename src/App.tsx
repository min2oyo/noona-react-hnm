import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './page/Login';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';

function App() {

  // 출력
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );

}

export default App;
