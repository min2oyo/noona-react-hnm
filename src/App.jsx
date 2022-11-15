import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './component/Navbar';
import Login from './page/Login';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import { useEffect, useState } from 'react';

function App() {

  // 변수
  const [authenticate, setAuthenticate] = useState(false);  // 로그인 여부

  // 함수
  useEffect(() => {
    console.log(`로그인 여부`, authenticate);
  }, [authenticate]);

  // 출력
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );

}

export default App;
