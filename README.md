# 202130133 최현기

### 📖 [[React 강의 공식문서](https://ko.react.dev/)]
-----
## 3월 27일 강의(4주차)
##### 병결로 인해 영상 참조 후 작성 했습니다.

### Component의 생성 및 중첩(nesting)

* React앱은 component로 구성
   component는 고유한 로직과 모양을 가진 UI의 일부

   component는 버튼처럼 작을 수도 있고, 전체 페이지처럼 클 수도 있음

   component는 마크업을 반환(return)하는 JavaScript 함수

   Nesting은 CSS 선택자의 중첩 구조를 생각하면 쉽게 이해

   CSS 중첩 구조는 2023년 부터 자체 지원. 이전에는 Sass나 Lass 등을 이용할 때 사용
  
* export default 선언의 위치는 어디가 좋을까?

   VS Code에서 자동 완성을 하면 위와 같이 맨 아래 선언되는 것을 확인

   하지만 공식 문서처럼 main component의 function 키워드 왼쪽에 선언하는 것이 좋음

   export default 키워드는 파일내의 component 중 기본 component를 지정

   이 키워드의 사용도 JavaScript 문법

   좀 더 구체적으로 알고 싶다면 사이트의 MDN 혹은 javascript.info 링크를 확인


#### [export default와 export의 차이]

* Named Exports(export)

   하나의 파일안에 여러개의 component가 있을 때 사용
   component를 사용하는 쪽에서는 component 정확한 이름을 명시
   예) imnport { add, subtract, multiply, divide } from './math'
  
* Default Exports(export default)

   하나의 파일안에서 하나의 component만 내보내는 경우 사용
   component를 사용하는 쪽에서는 어떤 이름을 사용해도 상관없음
   예) import calc from './calculator'
   예제 코드에서 MyButton Component만 분리

   어떤 과정을 거쳐야 하는지 생각하면서, 예제 코드와 같은 결과가 나오도록 수정
   Default Exports이기 때문에 import할 때는 어떤 이름을 사용해도 상관없음
   다만 convention을 달리할 경우 가독성이 떨어지기 때문에 대문자로 시작하는 것이 좋음

### JSX로 마크업 작성하기

* 앞에서 작성한 코드의 마크업 문법을 JSX라고 함
   반드시 사용해야 하는 것은 아니지만, React 프로젝트에서는 편의성을 위해 JSX를 사용
   JSX는 HTML보다 더욱 엄격한 문법을 적용
   JSX에서는 싱글 태그라도 태그를 닫아야 함
   React에서는 여러개의 component를 JSX태그로 반환
   다만 여러개의 component를
   ...
   또는 빈 <>...</> wrapping 

### 스타일 추가하기

* React에서는 className으로 CSS 클래스를 지정
   <img className="avatar" />
   className은 HTML의 class 속성과 동일한 방식으로 동작
   CSS 규칙은 별도의 CSS 파일에 작성 그런데 React는 CSS 파일을 추가하는 방법을 규정X
   정작 페이지를 작성할 때와 동일한 방법을 지원
   /* In your CSS */
   .avatar {
       border-radius: 50%;
   }
   가장 간단한 방법은 HTML에 태그를 추가
   그러나 link를 추가하면 정적 페이지를 수정해야 하기 때문에 추천X
   만일 빌드 도구나 프레임워크를 사용한다면 해당 문서를 참고하여 프로젝트에 CSS 파일을 추가합니다.
  
### 데이터 표시하기

   JSX를 사용하면 자바스크립트에 마크업을 넣을 수 있음
   JSX 코드 내에서 JavaScript로 "탈출"하여 변수나 표현식을 사용하는 것
   이 방법을 "Escape Back"이라고 함
   {} 중괄호를 사용해서 변수나 표현식을 사용자에게 표시하도록 하는 것
```
   return (
       <h1>
           {user.name} // 자바스크립트 이스케이프
       </h1>
   );


   return (
       <img
           className="avatar"
           src={user.imageUrl}
       />
   );
```
   src 속성에 user.imageUrl 변수의 값을 전달하여 이미지의 경로를 설정하고 있음
   반면에 className="avatar"는 단순히 문자열을 전달하는 경우에는 중괄호 대신 큰 따옴표를 사용
   스타일을 추가하기 위해서는 import 키워드를 이용해서 파일 경로를 작성
   
### 조건부 렌더링

* React에서 조건문을 작성하는 데에는 특별한 문법이 필요 없음
   일반적인 자바스크립트 코드를 작성할 때 사용하는 것과 동일한 방법을 사용합니다.
  
### 리스트 렌더링하기

컴포넌트 리스트를 렌더링하기 위해서는 for 문 및 map() 함수와 같은 자바스크립트 기능을 사용
key 속성(attribute)이 있는 것을 주목
목록을 사용할 때는 각 항목에 대해 고유하게 식별하는 문자열 또는 숫자를 전달
항목을 삽입, 삭제 또는 재정렬할 때 어떤 일이 일어났는지 알기 위해 key를 사용
이것을 key props라고 하는데, 자세한 내용은 props를 학습 때.

-----
## 3월 20일 강의(3주차)

### React Project의 구조 및 역할
##### node_modules/
* 초기 node module 및 새로 설치하는 패키지 저장
* 엄청난 양의 파일 존재
* git으로 관리 x
##### public/
* 정적(static) 파일을 저장
* build 후 배포 할 html, CSS, JavaScript 보관

##### index.html
* React 앱이 마운트 되는 HTML 파일

##### src/
* Reac 프로젝트의 주요 코드가 위치하는 디렉토리
* 대부분의 작업이 이루어지는 곳.

##### App.js
* 메인 component
* index.js로 전달

##### App.css
* App.js에 적용되는 스타일을 정의

##### index.js
* React 앱의 진입점
* ReacDom.createRoot를 사용해서 App.js를 렌더링

##### index.css
* 전역 스타일을 정의

### 의존성 관리와 package.json
* 패키지의 의존성을 관리하는 파일
* 의존성이란 하나의 소프트웨어가 다른 소프트웨어에 의존하여 동작하는 관계
* 협업할 때 같은 패키지를 설치해 동일한 개발환경을 구성
* node 패키지는 각 팀운들이 설치
* 의존성을 무시 할 경우 프로젝트의 오류 등이 발생
* 개인 프로젝트의 경우에도 동일한 개발환경을 구성
#### [의존성을 관리하는 이유]
* 손쉬운 설치 및 업데이트
    * npm install 또는 yarn install 로 의존성 자동 설치
    * 특정 버전의 라이브러리를 쉽게 업데이트    
* 일괄된 개발 환경 유지
    * 팀원들과 같은 라이브러리 버전을 유지
    * package-lock.json을 이용하면 동일한 패키지를 정확한 버전으로 설치 가능.
* 중복 설치 방지
    * 필요없는 라이브러리 제거, 프로젝트 경량화
 
※package.json은 이런 의존성을 체계적으로 관리

#### [package.json의 의존성 내용의 종류]
* dependencies : 실제 코드에서 사용하는 라이브러리
* devDependencies : 개발할 때만 필요한 라이브러리들
* peerDependencies : 필요한 라이브버리만, 사용자에게 설치를 맡김
* optionalDependencies : 선택적 의존성

#### [package.json 과 package-lock.json 차이]
"^3.1.5" => 꼭 3.1.5버전이어야함
"~3.1.5" => 어느정도 범위 내외

#### [package.json을 유지해야 하는 이유]
1. 프로젝트의 의존성 정보 제공
    * 어떤 패키지를 사용하는지 정의
    * 어떤 패키지를 설치해야 하는지 알 수 있는 기준
2. 버전 범위 설정 가능
    * ^18.0.0 처럼 최신 패치버전 or 18.2.0처럼 정확한 버전만 고정
    * 개발자가 원하는 방식으로 유연하게 
3. 스크립트와 메타데이터 저장
    * "script" 속성을 이용해 빌드, 테스트, 실행 등의 명령어 저장
    * 프로젝트 실행을 위해 꼭 필요
4. 새로운 패키지 설치 및 관리
    * 패키지 설치시 package.json에 추가 package-lock.json에는 정확한 버전
    * package.json이 없으면 설치 X

### node module의 재설치
* 팀 작업을 하면서 GitHub로 부터 프로젝트 파일을 clone 했을 경우
* 개인이 clone을 받아 개발해야 하는 경우
* 프로젝트에 문제가 생겨서

#### [clone을 받은 프로젝트의 경우]
1. npm install 명령어로 재 설치
2. node modules/ 자동생성
3. 설치 후 프로젝트 실행

#### [프로젝트에 오류나 의존성 등의 문제가 생겼을 경우]
1. node modules 폴더와 package-lock.json 파일 삭제 ($rm -rf node_modules package-lock.json)
2. npm 패키지의 임시 저장소인 cache(캐시)를 초기화
    * cache가 오래되면 충돌 발생 가능성 증가
    * force옵션으로 강제 삭제 ($ npm cache clean --force)
3. 패키지 재설치 ($ npm install)

#### [package-lock.json을 삭제하는 이유]
1. 손상되었거나 잘못된 의존성이 있을때
2. 최신 버전의 패키지를 다시 받고 싶을 때
3. 팀 프로젝트에서 다른 팀원이 이상한 상태로 package-lock.json을 업데이트 했을 때

※문제가 없다면 유지하는게 좋지만 에러가 발생하면 삭제 후 재설치 하는것이 좋음



### React 개요
* component 단위로 개발하여 레고를 조립하듯이 앱을 완성
* 작은 기능을 실행할 수 있는 하나의 모듈
* [공식 사이트의 홈](https://ko.react.dev/)에 설명
* 코드 자체를 이해할 필요는 없음
* component가 페이지로 변해가는 과정에 집중
* [React 사이트](https://ko.react.dev/)에 접속하여 예제코드 확인
* 사이트에서 자체 한글을 지원 ※자동 번역XXX
* component의 조립 과정에만 집중

### Component를 사용한 유저 인터페이스 생성
* component라고 하는 개별 조각으로 사용자 인터페이스 구축
* react component를 생성하고 결합하여 화면과 페이지 그리고 앱 전체를 구성

### full-stack App 개발을 도와주는 React Framework
* React는 라이브러리이기 때문에 component를 조합 O 가져오기 방법등을 규정X


-----
## 3월 13일 강의


### Node.js란 무엇인가?
    
#### Node.js가 인기를 끄는 이유
* 빠른 성능
* JavaScript 풀스택 개발
* 활발한 생테계
* 실시간 애플리케이션에 강함
* 마이크로 서비스 및 서버리스 환경과의 조화로운 연동

#### Node.js는 앞으로도 계속 발전할까?
* Deno의 등장 but 아직 Node.js의 생태계가 훨씬 크고 안정적

    
#### Node.js 장단점
##### [장점]
* 비동기 논 블로킹 I/O로 높은 성능 제공
* JavaScript 풀스택 개발이 가능하여 생산성이 향상됨
* npm의 방대한 생태계를 활용 가능
* 경량 서버 개발에 적함 (Express.js등)
* 실시간 데이터 처리(WebSocket)가 강력함
        
##### [단점]
* Cpu 집약적인 작업에 부적합(멀티스레딩 성능이 부족함)
* 콜백 지옥문제(async/await과 Promise 사용)
* 보안 취약점(npm 패키지)
        
### React의 진화와 강의 진행방향

* React 공식문서를 기초 + 자세한 설명 추가
* codesandbox.io에서 테스트를 하도록 되어 있으나, 직접 local에서 테스트
* create react app을 통해 프로젝트를 생성해서 사용

### React 개발환경 구축
* 개발 환경은 Node.js 설치
* node LTS버전 다운
* node를 설치하면 npx와 npm이 같이 설치됨
* 이 외에는 코드 에디터와 웹 브라우저만 준비하면 개발 환경 구축은 끝입니다.

### React Project 생성
* working directory 생성
* working directory 오픈 후 터미널 오픈


### React Project의 구조 및 역할(중요파일)
* node_modules/
* public/
* index.html
* src/
* App.css
* App.js
* index.css
* index.js
* .gitignore
* package-lock.json
* pakage.json
* README.md

-----

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


