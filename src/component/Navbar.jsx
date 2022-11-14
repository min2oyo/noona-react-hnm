import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

  // 변수
  const menuList = ["여성", "Divided", "남성", "신생아/유아", "아동", "H&M HOME", "Sale", "지속가능성"];

  // 출력
  return (
    <>
      {/* 로그인 */}
      <div>
        <div className='login-button'>
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
            <li>{menu}</li>
          ))}
        </ul>
        {/* 검색 */}
        <div className='search'>
          <FontAwesomeIcon icon={faSearch} />
          <input type='text' placeholder='Search products' />
        </div>
      </div>
    </>
  );

};

export default Navbar;