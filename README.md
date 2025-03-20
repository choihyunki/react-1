# 202130133 최현기

## 3월 20일 강의

### 📖 React 강의 공식문서 (https://ko.react.dev/)


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


