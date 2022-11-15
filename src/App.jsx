import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './component/Navbar';
import Login from './page/Login';
import ProductAll from './page/ProductAll';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

function App() {

  // 변수
  const [authenticate, setAuthenticate] = useState(false);  // 로그인 여부

  // 실행
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
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />} />
      </Routes>
    </>
  );

}

export default App;
