## Installed
- 타입스크립트 템플릿
  - npx create-react-app --template typescript .
- 라우터 (https://reactrouter.com/)
  - npm install react-router-dom
- fontawesome (https://fontawesome.com/v5/docs/web/use-with/react)
  - npm i --save @fortawesome/fontawesome-svg-core
  - npm i --save @fortawesome/free-solid-svg-icons
  - npm i --save @fortawesome/react-fontawesome
  - npm i --save @fortawesome/free-regular-svg-icons
- JSON Server (https://www.npmjs.com/package/json-server)
  - npm i -g json-server
- bootstrap (https://react-bootstrap.github.io/getting-started/introduction)
  - npm i react-bootstrap bootstrap
## Using
- JSON Server
  - json-server --watch db.json --port 3004

## Task
- 네비게이션 바, 전체 상품 페이지, 로그인, 상품상세페이지
- 네비게이션 바
  - 로그인 버튼 포인터 손모양
- 전체 상품 페이지
  - 전체 상품 목록
- 로그인 페이지
  - 로그인 버튼을 클릭시 이동 
- 상품 디테일페이지
  - 로그인 되어 있을 경우 상품 디테일 페이지 이동
  - 로그인 안 되어 있을 경우 로그인 페이지 이동
  - CSS 작업
  - '사이즈 선택' 드랍다운 박스 (부트스트랩 이용)
  - 추가 버튼
- 로그아웃
  - 버튼을 클릭시 로그아웃이 됨
  - 로그아웃이 되면 상품 디테일페이지 볼 수 없음
- 상품 검색 기능