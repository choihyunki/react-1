# 202130133 최현기

### 📖 [[React 강의 공식문서](https://ko.react.dev/)]

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


