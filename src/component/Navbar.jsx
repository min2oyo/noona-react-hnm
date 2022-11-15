import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  // 변수
  const menuList = ["여성", "Divided", "남성", "신생아/유아", "아동", "H&M HOME", "Sale", "지속가능성"];  // 메뉴
  const navigate = useNavigate(); // 이동

  // 함수
  const goToLogin = () => { // 로그인 버튼 클릭
    navigate(`/login`);
  };

  const search = event => {    // 검색 입력
    if (event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  // 출력
  return (
    <>
      {/* 로그인 */}
      <div>
        <div className='login-button' onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      </div>
      {/* 로고 */}
      <div className='nav-section'>
        <img src='https://www2.hm.com/hm-logo.png' width={100} />
      </div>
      {/* 메뉴 */}
      <div className='menu-area'>
        <ul className='manu-list'>
          {menuList.map(menu => (
            <li key={menu}>{menu}</li>
          ))}
        </ul>
        {/* 검색 */}
        <div className='search'>
          <FontAwesomeIcon icon={faSearch} />
          <input type='text' onKeyPress={enent => search(enent)} placeholder='Search products' />
        </div>
      </div>
    </>
  );

};

export default Navbar;