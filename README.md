# 202130133 최현기

### 📖 [[React 강의 공식문서](https://ko.react.dev/)]
-----

## 6월 5일 강의


기존 프로젝트에 React 추가

[1단계: 모듈 자바스크립트 환경 설정하기]

모듈 자바스크립트 환경은 모든 코드를 한 파일에 작성하는 것이 아닌, 각각의 React 컴포넌트를 개별 파일로 작성할 수 있게 합니다.
또한(React 자체를 포함한) 다른 개발자들이 npm 레지스트리에 배포한 훌륭한 패키지들을 모두 사용할 수 있습니다.

이 작업을 수행하는 방법은 기존 설정에 따라 다릅니다.
이미 애플리케이션이 import 문을 이용해 파일을 분리하고 있다면, 기존에 가지고 있는 설정을 이용해 보세요.

JS 코드에서
를 작성하면 문법 오류가 발생하는지 확인해 보세요.
문법 오류가 발생한다면 Babel을 이용한 자바스크립트 코드 변환이 필요할 수 있으며, JSX를 사용하려면 Babel React 프리셋을 활성화해야 할 수도 있습니다.
애플리케이션이 자바스크립트 모듈을 컴파일하기 위한 기존 설정이 없다면, Vite를 이용하여 설정하세요.

Vite 커뮤니티는 Rails, Django, Laravel을 포함한 다양한 백엔드 프레임워크와의 통합을 지원하고 있습니다.
사용 중인 백엔드 프레임워크가 목록에 없다면 가이드를 참고하여 Vite 빌드를 백엔드와 수동으로 통합하세요.
설정이 제대로 동작하는지 확인하려면 프로젝트 폴더에서 아래 명령어를 실행하세요.
npm install react react-dom
그리고 메인 자바스크립트 파일의 최상단에 다음 코드 라인을 추가하세요. index.js 혹은 main.js라는 파일일 수 있습니다.
import { createRoot } from "react-dom/client";

// 기존 HTML 컨텐츠를 지웁니다.
document.body.innerHTML = '<div id="app"></div>';

// 대신에 여러분이 작성한 React 컴포넌트를 렌더링합니다.
const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, World!</h1>);
페이지 전체 내용이 "Hello, World!"로 바뀌었다면 모든 것이 정상적으로 동작하고 있는 것입니다.
⚠ 처음으로 기존 프로젝트에 모듈 자바스크립트 환경을 통합하기는 다소 어려워보일 수 있으나, 그만한 가치가 있는 일입니다. 어려움을 겪는 부분이 있다면 커뮤니티 리소스나 Vite 채팅을 이용해 보세요.
[2단계: 페이지 어디에서든 React 컴포넌트 렌더링하기]

이전 단계에서는, 메인 파일 최상단에 아래 코드를 넣었습니다.
당연히 실제로는 기존 HTML 컨텐츠를 지우고 싶지 않을 겁니다!
그렇다면 이 코드를 삭제하세요.
대신 React 컴포넌트를 HTML의 특정 위치에 렌더링하고 싶을 것입니다.
HTML 페이지를 열고(또는 이를 생성하는 서버 템플릿) HTML 태그에 고유한 id 어트리뷰트를 추가하세요.
이렇게하면 document.getElementById로 HTML 엘리먼트를 찾아 createRoot에 전달함으로써 해당 요소 내부에 React 컴포넌트를 렌더링할 수 있습니다.
기존 프로젝트에서 React를 도입할때, 일반적으로 작은 상호작용 컴포넌트(예시: 버튼)에서 시작하여 점진적으로 "상위 구조로 확장하면서" 결국 전체 페이지가 React로 빌드될 때까지 이 과정을 반복하게 됩니다.
에디터 설정하기

[에디터 설정하기]

VS Code는 현재 가장 많이 사용되는 에디터 중 하나입니다.
VS Code에 설치할 수 있는 익스텐션의 종류는 무수히 많으며, Github와 같은 외부 서비스와의 연동도 지원합니다.
[에디터 기능 추천]

Linting

코드 린터는 코드를 작성하는 동안 실시간으로 문제를 찾아 줌으로써 빠른 문제해결이 가능하도록 도와줍니다.
ESLint는 많이 사용되고 JavaScript를 위한 오픈소스 린터입니다.
Formatting

다른 개발자들과 협업할 때 가장 피하고 싶은 것은 탭 vs 공백에 대한 논쟁일 것입니다.
다행히 Prettier를 사용하면 직접 지정해 놓은 규칙들에 부합하도록 코드의 형식을 깔끔하게 정리할 수 있습니다.
Prettier를 실행하면 모든 탭은 공백으로 전환될 뿐만 아니라 들여쓰기, 따옴표 형식과 같은 요소들이 전부 설정에 부합하도록 수정될 것입니다.
TypeScript 사용하기

기본적으로 TypeScript는 JSX를 지원하며, @types/react 및 @types/react-dom을 추가하면 완전한 React Web 지원을 받을 수 있습니다.
React 컴파일러

이 페이지는 React 컴파일러에 대한 소개와 이를 성공적으로 사용하는 방법을 제공합니다.
1. Github Pages 기본 저장소란?

Github Pages를 운영하려면 먼저 Github Pages 저장소를 생성해야 합니다.
생성 방법은 일반 저장소 생성과 동일하지만, 저장소 이름은 도메인 형태로 해야 합니다.
또한 최상위 도메인 부분은 .com이 아니라 .io로 해야 합니다. (My Github ID).github.io
기본 저장소는 https://(My Github ID).github.io로 외부에서 접속할 수 있습니다.
처음부터 저장소를 local에 만들었다면 그대로 push합니다(추천)
-----
## 5월 29일 강의

[애플리케이션 성능 개선]

선택한 빌드 도구는 단일 페이지 앱(SPA)만 지원하므로:

서버 사이드 렌더링(SSR) - SSG와 유사하지만 매 요청 시 서버에서 정적 페이지 생성
정적 사이트 생성(SSG) - 빌드 시 한 번에 모든 정적 페이지 생성
React 서버 컴포넌트(RSC) - 서버에서 동작하는 컴포넌트로 DB 접근 등이 가능
와 같은 다른 렌더링 패턴을 구현해야 합니다.
처음에는 이러한 기능이 필요하지 않더라도 나중에 SSR, SSG 또는 RSC에 도움이 될 수 있는 몇가지 방법이 있을 수 있습니다.

단일 페이지 앱(SPA)은 단일 HTML 페이지를 로드하고, 사용자가 앱과 상호작용할 때 페이지를 동적으로 업데이트합니다.

SPA는 시작하기는 쉽지만 초기 로드 시간이 느릴 수 있습니다.
SPA는 대부분의 빌드 도구에서 기본 아키텍처로 사용됩니다.
스트리밍 서버 측 렌더링(SSR)은 서버에서 페이지를 렌더링하고 완전히 렌더링된 페이지를 클라이언트로 전송합니다.

SSR은 성능을 향상시킬 수 있지만, 단일 페이지 앱보다 설정 및 유지 관리가 더 복잡할 수 있습니다.
특히 스트리밍 기능이 추가되면 SSR은 설정 및 유지 관리가 매우 복잡해질 수 있습니다.
Vite의 SSR 가이드를 참조하세요.
정적 사이트 생성(SSG)은 빌드 시점에 앱의 모든 정적 HTML 파일을 생성합니다.

SSG는 성능을 향상시킬 수 있지만, 서버 측 렌더링(SSR)보다 설정 및 유지 관리가 더 복잡할 수 있습니다.
Vite의 SSG 가이드를 참조하세요.
React Server Component(RSC)를 사용하면 빌드 타임, 서버 전용, 인터랙티브 컴포넌트를 단일 React 트리에 포함할 수 있습니다.

RSC는 성능을 향상시킬 수 있지만, 현재 설정 및 유지 관리에 대한 전문 지식이 필요합니다.
Parcel의 RSC 예시를 참조하세요.
렌더링 전략은 라우터와 통합되어야 프레임워크로 빌드된 앱이 경로별로 렌더링 전략을 선택할 수 있습니다.
이를 통해 앱 전체를 다시 작성하지 않고도 다양한 렌더링 전략을 사용할 수 있습니다.
예를 들어, 앱의 랜딩 페이지는 정적으로 생성되는 SSG(정적 생성) 방식이 유리할 수 있지만, 컨텐츠 피드가 있는 페이지는 서버 측 렌더링이 가장 효과적일 수 있습니다.
⚠ 컨텐츠 피드란 사용자들이 자주 업데이트되는 컨텐츠를 쉽게 받아볼 수 있도록 제공되는 데이터 형식 또는 스트림을 의미합니다.
⚠ 소셜 미디어, 웹사이트, 앱 등 다양한 플랫폼에서 사용자들이 관심 있는 정보를 실시간으로 확인하고 소통할 수 있도록 도와주는 역할을 합니다.
올바른 경로에 적합한 렌더링 전략을 사용하면
컨텐츠의 첫 바이트를 로드하는 데 걸리는 시간(첫 번째 바이트까지의 시간),
컨텐츠의 첫 번째 부분을 렌더링하는 데 걸리는 시간(첫 번째 컨텐츠 페인트),
앱에서 가장 큰 표시 컨텐츠를 렌더링하는 데 걸리는 시간(가장 큰 컨텐츠 페인트)을 줄일 수 있습니다.

그리고 더 많은 것들...

지금까지 설명한 것은 새 앱을 처음부터 개발할 때 고려해야 할 기능의 몇 가지 예일 뿐입니다.
각 문제가 서로 밀접하게 연관되어 있고 익숙하지 않은 문제 영역에 대한 심층적인 전문 지식이 필요할 수 있으므로, 직면하게 될 많은 제약은 해결하기 어려울 수 있습니다.
이러한 문제를 스스로 해결하고 싶지 않다면, 이러한 기능을 제공하는 프레임워크를 바로 사용할 수 있습니다.
기존 프로젝트에 React 추가

[1단계: 모듈 자바스크립트 환경 설정하기]

모듈 자바스크립트 환경은 모든 코드를 한 파일에 작성하는 것이 아닌, 각각의 React 컴포넌트를 개별 파일로 작성할 수 있게 합니다.
또한(React 자체를 포함한) 다른 개발자들이 npm 레지스트리에 배포한 훌륭한 패키지들을 모두 사용할 수 있습니다.

이 작업을 수행하는 방법은 기존 설정에 따라 다릅니다.
이미 애플리케이션이 import 문을 이용해 파일을 분리하고 있다면, 기존에 가지고 있는 설정을 이용해 보세요.

JS 코드에서
를 작성하면 문법 오류가 발생하는지 확인해 보세요.
문법 오류가 발생한다면 Babel을 이용한 자바스크립트 코드 변환이 필요할 수 있으며, JSX를 사용하려면 Babel React 프리셋을 활성화해야 할 수도 있습니다.
애플리케이션이 자바스크립트 모듈을 컴파일하기 위한 기존 설정이 없다면, Vite를 이용하여 설정하세요.

Vite 커뮤니티는 Rails, Django, Laravel을 포함한 다양한 백엔드 프레임워크와의 통합을 지원하고 있습니다.
사용 중인 백엔드 프레임워크가 목록에 없다면 가이드를 참고하여 Vite 빌드를 백엔드와 수동으로 통합하세요.
설정이 제대로 동작하는지 확인하려면 프로젝트 폴더에서 아래 명령어를 실행하세요.
npm install react react-dom
그리고 메인 자바스크립트 파일의 최상단에 다음 코드 라인을 추가하세요. index.js 혹은 main.js라는 파일일 수 있습니다.
import { createRoot } from "react-dom/client";

// 기존 HTML 컨텐츠를 지웁니다.
document.body.innerHTML = '<div id="app"></div>';

// 대신에 여러분이 작성한 React 컴포넌트를 렌더링합니다.
const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, World!</h1>);
페이지 전체 내용이 "Hello, World!"로 바뀌었다면 모든 것이 정상적으로 동작하고 있는 것입니다.
⚠ 처음으로 기존 프로젝트에 모듈 자바스크립트 환경을 통합하기는 다소 어려워보일 수 있으나, 그만한 가치가 있는 일입니다. 어려움을 겪는 부분이 있다면 커뮤니티 리소스나 Vite 채팅을 이용해 보세요.
-----
## 5월 22일 강의(12주차)

#### 설치하기

React는 처음부터 점진적으로 적용할 수 있도록 설계
필요한 만큼 React를 사용가능
React를 맛보기로 접해보려거나, 간단한 HTML 페이지에 약간의 상호작용을 추가하거나, 복잡한 React 기반의 앱을 시작하고자 하는 경우 참고

#### React 시도하기 

단순히 React를 사용해 보고 싶다면, 아무것도 설치할 필요 없습니다. 이 샌드박스를 통해 사용해 보세요

```javascript
function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}

export default function App() {
  return <Greeting name="world" />
}
```

#### 새로운 React 앱 만들기

React로 새로운 앱이나 웹사이트를 구축하려면 프레임워크부터 시작하는 것이 좋습니다.</br>
앱에 기존 프레임워크에서 잘 제공되지 않는 제약 조건이 있거나, 자체 프레임워크를 빌드하는 것을 선호하거나, React 앱의 기본 사항만 배우려는 경우 React 앱을 처음부터 빌드할 수 있습니다.

#### 풀스택 프레임워크 
이러한 권장 프레임워크는 프로덕션에서 앱을 배포하고 확장하는 데 필요한 모든 기능을 지원합니다. 그들은 최신 React 기능을 통합하고 React의 아키텍처를 활용합니다.

```
풀스택 프레임워크에는 서버가 필요하지 않습니다 
이 페이지의 모든 프레임워크는 클라이언트 측 렌더링(CSR), 단일 페이지 앱(SPA), 정적 사이트 생성(SSG)을 지원합니다.
이러한 앱은 서버 없이 CDN 또는 정적 호스팅 서비스에 배포할 수 있습니다.
또한 이러한 프레임워크를 사용하면 사용 사례에 적합한 경우 경로별로 서버 측 렌더링을 추가할 수 있습니다.

이렇게 하면 클라이언트 전용 앱으로 시작할 수 있으며,
나중에 요구 사항이 변경되는 경우 앱을 다시 작성하지 않고도 개별 경로에서 서버 기능을 사용하도록 선택할 수 있습니다.
렌더링 전략을 구성하는 방법에 대한 프레임워크 설명서를 참조하세요.
```


-----
## 5월 15일 강의(11주차)

최소한의 데이터만 이용해서 완벽하게 UI State 표현하기<br>
UI를 상호작용(interactive)하게 만들려면, 사용자가 기반 데이터 모델을 변경할 수 있게해야 합니다.<br>
React는 state를 통해 기반 데이터 모델을 변경할 수 있게 합니다.<br>
state는 앱이 기억해야 하는, 변경할 수 있는 데이터의 최소 집합이라고 생각하세요.<br>
state를 구조화 하는데 가장 중요한 원칙은 중복배제원칙(Don't Repeat Yourself)입니다.<br>
애플리케이션이 필요로 하는 가장 최소한의 state를 파악하고, 나머지 모든 것들은 필요에 따라 실시간으로 계산하세요.<br>
예를 들어, 쇼핑 리스트를 만든다고 하면 당신은 배열에 상품 아이템들을 넣을 겁니다.<br>
UI에 상품 아이템의 개수를 노출하고 싶다면, 상품 아이템 개수를 따로 state 값으로 가지는 게 아니라 단순하게 배열의 길이만 쓰면됩니다.<br>
예시 애플리케이션 내 데이터들을 생각해 봅시다. 애플리케이션은 다음과 같은 데이터를 가지고 있습니다.<br>
```
제품의 원본 목록
사용자가 입력한 검색어
체크박스의 값
필터링된 제품 목록
```
이 중 어떤 것이 state가 되어야 할까요? 아래의 세 가지 질문을 통해 결정할 수 있습니다.<br>
시간이 지나도 변하지 않나요? 그러면 확실히 state가 아닙니다.<br>
부모로부터 props를 통해 전달됩니까? 그러면 확실히 state가 아닙니다.<br>
컴포넌트 안의 다른 state나 props를 가지고 계산 가능한가요? 그렇다면 절대로 state가 아닙니다!<br>
이 외 남는건 아마 state일 겁니다.<br>

- 위 데이터들을 다시 한번 순서대로 살펴봅시다.
- 1. 제품의 원본 목록은 props로 전달되었기 때문에 state가 아닙니다.
- 2. 사용자가 입력한 검색어는 시간이 지남에 따라 변하고, 다른 요소로부터 계산될 수 없기 때문에 state로 볼 수 없습니다.
- 3. 체크박스의 값은 시간에 따라 바뀌고 다른 요소로부터 계산될 수 없기 때문에 state로 볼 수 있습니다.
- 4. 필터링된 제품 목록은 원본 제품 목록을 받아서 검색어와 체크박스의 값에 따라 계산할 수 있으므로, 이는 state가 아닙니다.
- 5. 따라서, 검색어와 체크박스의 값만이 state입니다! ⚠ 공식문서의 자세히 살펴보기를 통해서 props와 state에 관해서 다시 한번 정리합니다.

State가 어디에 있어야 할 지 정하기

이제 앱에서 최소한으로 필요한 state를 결정했습니다.<br>
다음으로는 어떤 컴포넌트가 이 state를 소유하고, 변경할 책임을 지게 할 지 정해야 합니다.<br>
React는 항상 컴포넌트 계층구조를 따라 부모에서 자식으로 데이터를 전달하는 단방향 데이터 흐름을 사용하는 것을 기억하세요!<br>
앱을 구현하면서 어떤 컴포넌트가 state를 가져야 하는 지 바로 명확하지 않을 수 있습니다.<br>
이 개념이 처음이라면 더 어려울 수 있습니다.<br>
그러나 아래의 과정을 따라가면 해결할 수 있습니다.<br>
애플리케이션의 각 state에 대해서,해당 state를 기반으로 렌더링하는 모든 컴포넌트를 찾으세요.<br>
그들의 가장 가까운 공통되는 부모 컴포넌트를 찾으세요. 
- 계층에서 모두를 포괄하는 상위 컴포넌트
state가 어디에 위치돼야 하는지 결정합시다.<br>
state가 어디에 위치 돼야하는지 결정하려면, 대개, 공통 부모에 state를 그냥 두면됩니다.<br>
혹은, 공통 부모 상위의 컴포넌트에 둬도 됩니다.<br>
state를 소유할 적절한 컴포넌트를 찾지 못했다면, state를 소유하는 컴포넌트를 하나 만들어서 상위 계층에 추가하세요.<br>
이전 단계에서, 이 애플리케이션의 두 가지 state인 "사용자의 검색어 입력과 체크박스의 값"을 발견하였습니다.<br>
이 예시에서 두 가지 state가 항상 함께 나타나기 때문에 같은 위치에 두는 것이 합리적입니다.<br>

- 이제 이 전략을 애플리케이션에 적용해 봅시다.
1. state를 쓰는 컴포넌트를 찾아봅시다.
- ProductTable은 state에 기반한 상품 리스트를 필터링해야 합니다.(검색어와 체크박스의 값)
- SearchBar는 state를 표시해 주어야합니다.(검색어와 체크박스의 값)
2. 공통 부모를 찾아봅시다. - 둘 모두가 공유하는 첫번째 부모는 FilterableProductTable입니다. 
3. 어디에 state가 존재해야할지 정해봅시다. - 우리는 FilterableProductTable에 검색어와 체크박스 값을 state로 둘겁니다.
- 이제 state 값은 FilterableProductTable 안에 있습니다. - useState() Hook을 이용해서 state를 컴포넌트에 추가하세요.
- Hooks는 React 기능에 "연결할 수(hook into)" 있게 해주는 특별한 함수 입니다.
1. FilterableProductTable의 상단의 두 개의 state 변수를 추가해서 초기값을 명확하게 보여주세요.

```javascript
function FilterableProductTable({ products }) { const [filterText, setFilterText] = useState(''); const [inStockOnly, setInStockOnly] = useState(false); }
```

2. 다음으로, filterText와 inStockOnly를 ProductTable과 SearchBar에게 props로 전달하세요.
- 이제 애플리케이션이 어떻게 동작하는지 알 수 있습니다.
- filterText의 초깃값을 useState('')에서 useState('fruit')로 수정해보세요.
- 검색창과 데이터 테이블이 모두 업데이트 됨을 확인할 수 있습니다.
ProductTable의 props를 추가해줍니다. -> products, filterText, inStockOnly<br>
ProductTable의 forEach문을 수정합니다. ⚠ 첫번째 코드와 비교해 보면서 어디가 수정되었는지 정확하게 수정해줘야 합니다.<br>
아직 폼을 수정하는 작업이 작동하지 않습니다. 문서의 샌드박스에서 콘솔 에러가 발생하고 그 이유를 설명하겠습니다.<br>
완성된 코드를 보면, ProductTable와 SearchBar가 filterText와 inStockOnly props를 table, input과 체크박스를 렌더링하기 위해서 읽고 있습니다.<br>
예를 들면, SearchBar input의 value를 아래와 같이 채우고 있습니다.<br>
아직 사용자의 키보드 입력과 같은 행동에 반응하는 코드는 작성하지 않았습니다, 이 과정은 마지막 단계에서 진행할 예정입니다.<br>


#### 역 데이터 흐름 추가하기

지금까지 우리는 계층 구조 아래로 흐르는 props와 state의 함수로써 앱을 만들었습니다.<br>
이제 사용자 입력에 따라 state를 변경하려면 반대 방향의 데이터 흐름을 만들어야 합니다.<br>
이를 위해서는 계층 구조의 하단에 있는 컴포넌트에서 FilterableProductTable의 state를 업데이트할 수 있어야 합니다.<br>

- React는 데이터 흐름을 명시적으로 보이게 만들어 줍니다. - 그러나 이는 전통적인 양방향 데이터 바인딩보다 조금 더 많은 타이핑이 필요합니다.<br>
- 4단계의 예시에서 체크하거나 키보드를 타이핑할 경우 UI의 변화가 없고 입력을 무시하는 것을 확인할 수 있습니다.
- 이것은 의도적으로 ```input value={ filterText }```로 코드를 쓰면서 value라는 prop이 항상 FilterableProductTable의 filterText라는 state를 통해서 데이터를 받도록 정했기 때문입니다.
- filterText라는 state가 변경되는 것이 아니기 때문에 input의 value는 변하지 않고 화면도 바뀌는 것이 없습니다.
- 우리는 사용자가 input을 변경할 때마다 사용자의 입력을 반영할 수 있도록 state를 업데이트하기를 원합니다.
- state는 FilterableProductTable이 가지고 있고 state 변경을 위해서는 setFilterText와 setInStockOnly를 호출을 하면 됩니다.
- SearchBar가 FilterableProductTable의 state를 업데이트할 수 있도록 하려면, 이 함수들을 SearchBar로 전달해야합니다.
- 
```javascript
function FilterableProductTable({ products }) { const [filterText, setFilterText] = useState(''); const [inStockOnly, setInStockOnly] = useState(false);
     return (
         <div>
             <SearchBar
                 filterText={ filterText }
                 inStockOnly={ inStockOnly }
                 onFilterTextChange={ setFilterText }
                 onInStockOnlyChange={ setInStockOnly } />
     )
 }
 ```

SearchBar에서 onChange 이벤트 핸들러를 추가하여 부모 state를 변경할 수 있도록 구현할 수 있습니다.
```
function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
    return (
        <form>
            <input
                type="text"
                value={ filterText }
                placeholder="Search..."
                onChange={ (e) => onFilterTextChange(e.target.value) }
            />
            <label>
                <input
                    type="checkbox"
                    checked={ inStockOnly }
                    onChange={ (e) => onInStockOnlyChange(e.target.checked) }
                />
    )
}
```

이제 애플리케이션이 완전히 동작합니다!
-----
## 5월 8일 강의(10주차)

React로 사고하기

React를 사용하게 되면 우리가 고려하고 있는 디자인이나 만들 앱들에 대한 생각을 바꿀 수있습니다.
React로 사용자 인터페이스를 빌드할 때, 먼저 이를 컴포넌트라는 조각으로 나눕니다.
그리고 각 컴포넌트의 다양한 시각적 상태들을 정의합니다.
마지막으로 컴포넌트들을 연결하여 데이터가 그 사이를 흘러가게합니다.
이 자습서에서는 React로 검색할 수 있는 상품 테이블을 만드는 과정을 체계적으로 안내해 드리겠습니다.

⚠ React는 component 기반으로 개발합니다. 이번장을 통해서 component의 조각들이 어떻게 App으로 완성되는지 다시 한번 확인해보세요.
모의 시안과 함께 시작하기 - 1

이미 JSON API와 디자이너로부터 제공받은 모의 시안이 있다고 생각해 봅시다.
JSON API는 아래와 같은 형태의 데이터를 반환합니다.
    [
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
    ]
모의 시안과 함께 시작하기 - 2

React로 UI를 구현하기 위해서 일반적으로 다섯 가지 단계를 거칩니다.
UI를 컴포넌트 계층으로 쪼개기

먼저 모의 시간에 있는 모든 컴포넌트와 하위 컴포넌트 주변에 박스를 그리고, 그들에게 이름을 붙이면서 시작해보세요.
디자이너와 함께 일한다면 그들이 이미 디자인 툴을 통하여 이 컴포넌트들에 이름을 정해 두었을 수도 있습니다. 한번 여쭤보세요!
어떤 배경을 가지고 있냐에 따라, 디자인을 컴포넌트로 나누는 방법에 대한 관점이 달라질 수 있습니다.
Programming: 새로운 함수나 객체를 만드는 방식과 같은 방법으로 해봅시다.
이 중 단일책임 원칙을 반영하고자 한다면 컴포넌트는 이상적으로는 한 번에 한 가지 일만 해야 합니다.
만약 컴포넌트가 점점 커진다면 작은 하위 컴포넌트로 쪼개져야 하겠죠.
CSS: 클래스 선택자를 무엇으로 만들지 생각해 봅시다. (실제 컴포넌트들은 약간 좀 더 세분되어 있습니다.)
Design: 디자인 계층을 어떤 식으로 구성할 지 생각해봅시다.
JSON이 잘 구조화 되어 있다면, 종종 이것이 UI의 컴포넌트 구조가 자연스럽게 데이터 모델에 대응된다는 것을 발견할 수 있습니다.
이는 UI와 데이터 모델은 보통 같은 정보 아키텍처, 즉 같은 구조를 가지기 때문입니다.
UI를 컴포넌트로 분리하고, 각 컴포넌트가 데이터 모델에 매칭될 수 있도록 하세요.
여기 다섯 개의 컴포넌트가 있습니다.
FilterableProductionTable(회색): 예시 전체를 포괄합니다.
SearchBar(파란색): 사용자의 입력을 받습니다.
ProductTable(라벤더색): 데이터 리스트를 보여주고, 사용자의 입력을 기반으로 필터링합니다.
ProductCategoryRow(초록색): 각 카테고리의 헤더를 보여줍니다.
ProductRow(노란색): 각각의 제품에 해당하는 행을 보여줍니다.
ProductTable을 보면 "Name"과 "Price" 레이블을 포함한 테이블 헤더 기능만을 가진 컴포넌트는 없습니다.
독립된 컴포넌트를 따로 생성할지 생성하지 않을지는 당신의 선택입니다.
이 예시에서는 3. ProductTable에 있는 단순한 헤더들이 ProductTable의 일부이기 때문에 위 레이블들을 컴포넌트로 만들지 않고 그냥 남겨두었습니다.
그러나 이 헤더가 복잡해지면(즉 정렬을 위한 기능을 추가하는 등) ProductTableHeader 컴포넌트를 만드는 것이 더 합리적일 것입니다.
이제 모의 시안 내의 컴포넌트들을 확인했으니, 이들을 계층 구조로 정리해 봅시다.
모의 시안에서 한 컴포넌트 내에 있는 다른 컴포넌트는 계충 구조에서 자식으로 표현됩니다.
React로 정적인 버전 구현하기

이제 컴포넌트 계층구조가 만들어졌으니, 앱을 실제로 구현해 볼 시간입니다.
가장 쉬운 접근 방법은 상호작용 기능은 아직 추가하지 않고, 데이터 모델로부터 UI를 렌더링하는 버전을 만드는 것입니다.
대체로 먼저 정적인 버전을 만들고 상호작용 기능을 추가하는게 더 쉽습니다.
정적 버전을 만드는 것은 많은 타이핑이 필요하지만, 생각할 것은 적습니다.
반대로 상호작용 기능을 추가하는 것은 많은 생각이 필요하지만, 타이핑은 그리 많이 필요하지 않습니다.
데이터 모델을 렌더링하는 앱의 정적인 버전을 만들기 위해서는
다른 컴포넌트를 재사용하고,
props를 이용하여 데이터를 넘겨주는 컴포넌트를 구현하는 것이 좋습니다.
props는 부모가 자식에게 데이터를 넘겨줄 때 사용할 수 있는 방법입니다.
혹시 state 개념에 익숙하다고 해도 정적인 버전을 만드는 데는 state를 쓰지 마세요!
state는 오직 상호작용을 위해, 즉 시간이 지남에 따라 데이터가 바뀌는 것에 사용합니다.
우리는 앱의 정적 버전을 만들고 있기 때문에 지금은 필요하지 않습니다.
앱을 만들때 계층 구조에 따라 상층부에 있는 컴포넌트 즉, 1. FilterableProductTable부터 시작하는 하향식(top - down)으로 만드는 방법이 있습니다.
또는 하층부에 있는 컴포넌트인 5. ProductRow부터 상향식(down - top)으로 만들 수도 있습니다.
간단한 예시에서는 보통 하향식으로 만드는게 쉽지만, 프로젝트가 커지면 상향식으로 만들고 테스트를 작성하면서 개발하기가 더 쉽습니다. ⚠ 공식 문서의 첫번째 코드는 state를 사용하기 전 완성된 코드입니다. 천천히 component 하나씩 완성해 봅시다.
이 단계가 끝나면 데이터 렌더링을 위해 만들어진 재사용 가능한 component들의 라이브러리를 가지게 됩니다.
현재는 앱의 정적 버전이기 때문에 component는 단순히 JSX만 리턴합니다.
계층구조의 최상위 component(FilterableProductTable)는 prop으로 데이터 모델을 받습니다.
이는 데이터가 최상위 component부터 트리의 맨 아래까지 흘러가기 때문에 단반향 데이터 흐름이라고 부릅니다. 🚨 주의하세요! 여기까지는 아직 state값을 쓰지 마세요. 다음 단계에서 사용할 겁니다!
Step - 2에 있는 component 구현하기

Project를 새로 생성하거나, 초기 commit으로 switch하여 실행에 이상이 없는지 확인합니다.
src/ 아래 필요없는 파일을 제거합니다. (logo.svg / setupTest.js)
App.js에 있는 코드를 모두 삭제합니다.
먼저 다음 코드로 App.js가 정상적으로 동작하는지 확인합니다.
const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" }, 
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" }, 
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" }, 
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" }, 
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" }, 
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];
사용할 데이터 PRODUCTS를 적당한 위치에 작성합니다.(여기에서는 제일 아래에 작성하도록 하겠습니다.)
다음으로 FilterableProductTable component를 만듭니다.
SearchBar와 ProductTable component를 작성합니다.
다음으로 ProductCategoryRow와 ProductRow를 작성합니다.
마지막으로 처음에 수정한 App component를 다시 수정합니다.
공식 문서의 출력과 동일하게 출력하는지 확인합니다.
최소한의 데이터만 이용해서 완벽하게 UI State 표현하기

UI를 상호작용(interactive)하게 만들려면, 사용자가 기반 데이터 모델을 변경할 수 있게해야 합니다.
React는 state를 통해 기반 데이터 모델을 변경할 수 있게 합니다.
state는 앱이 기억해야 하는, 변경할 수 있는 데이터의 최소 집합이라고 생각하세요.
state를 구조화 하는데 가장 중요한 원칙은 중복배제원칙(Don't Repeat Yourself)입니다.
애플리케이션이 필요로 하는 가장 최소한의 state를 파악하고, 나머지 모든 것들은 필요에 따라 실시간으로 계산하세요.
예를 들어, 쇼핑 리스트를 만든다고 하면 당신은 배열에 상품 아이템들을 넣을 겁니다.
UI에 상품 아이템의 개수를 노출하고 싶다면, 상품 아이템 개수를 따로 state 값으로 가지는 게 아니라 단순하게 배열의 길이만 쓰면됩니다.
예시 애플리케이션 내 데이터들을 생각해 봅시다. 애플리케이션은 다음과 같은 데이터를 가지고 있습니다.
제품의 원본 목록
사용자가 입력한 검색어
체크박스의 값
필터링된 제품 목록
이 중 어떤 것이 state가 되어야 할까요? 아래의 세 가지 질문을 통해 결정할 수 있습니다.
시간이 지나도 변하지 않나요? 그러면 확실히 state가 아닙니다.
부모로부터 props를 통해 전달됩니까? 그러면 확실히 state가 아닙니다.
컴포넌트 안의 다른 state나 props를 가지고 계산 가능한가요? 그렇다면 절대로 state가 아닙니다!
이 외 남는건 아마 state일 겁니다.
State가 어디에 있어야 할 지 정하기

역 데이터 흐름 추가하기
-----
## 4월 18일 강의(8주차 보충강의)

### State 한번 더 끌어올리기

이제 과거 이동 목록을 표시하기 위해 새로운 최상위 컴포넌트 Game을 작성하세요. 여기에 전체 게임 기록을 포함하는 history state를 배치하겠습니다.

history state를 Game 컴포넌트에 배치하면 자식 Board 컴포넌트에서 squares state를 제거할 수 있습니다. Square 컴포넌트에서 Board 컴포넌트로 state를 “끌어올렸던” 것처럼, 이제 Board 컴포넌트에서 최상위 Game 컴포넌트로 state를 끌어올릴 수 있습니다. 이렇게 하면 Game 컴포넌트가 Board 컴포넌트의 데이터를 완전히 제어하고 Board의 history에서 이전 순서를 렌더링하도록 지시할 수 있습니다.

먼저 export default가 있는 Game 컴포넌트를 추가하세요. 일부 마크업 안에 Board 컴포넌트를 렌더링하도록 하세요.


```js
function Board() {
  // ...
}

export default function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}
```

export default 키워드를 ```function Board() {``` 선언 앞에서 제거하고 ```function Game() {``` 선언 앞에 추가한 것에 유의하세요. 이것은 index.js 파일에서 Board 컴포넌트 대신 Game 컴포넌트를 최상위 컴포넌트로 사용하도록 지시합니다. Game 컴포넌트가 반환하는 내용에 추가한 div는 나중에 보드에 추가할 게임 정보를 위한 공간을 확보합니다.

다음 플레이어와 이동 기록을 추적하기 위해 Game 컴포넌트에 몇개의 state를 추가하세요.

```js
export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // ...
```

```[Array(9).fill(null)]```은 단일 항목배열로 그 자체가 9개의 null의 배열이라는 점에 유의하세요.

현재 이동에 대한 사각형을 렌더링하려면 history에서 마지막 사각형의 배열을 읽어야 합니다. 렌더링 중에 계산할 수 있는 충분한 정보가 이미 있으므로 useState는 필요하지 않습니다.

```js
export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];
  // ...

```
다음으로 Game 컴포넌트 안에 Board 컴포넌트가 게임을 업데이트할 때 호출할 handlePlay 함수를 만드세요. xIsNext , currentSquares , handlePlay 를 Board 컴포넌트에 props로 전달하세요.

```js
export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    // TODO
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        //...
  )
}
```

Board 컴포넌트가 props에 의해 완전히 제어되도록 만들겠습니다. Board 컴포넌트를 xIsNext, squares, 그리고 플레이어가 움직일 때마다 Board가 업데이트된 사각형을 배열로 호출할 수 있는 새로운 onPlay 함수를 props로 받도록 변경하세요. 다음으로 Board 함수에서 useState를 호출하는 처음 두 줄을 제거하세요.

```js

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    //...
  }
  // ...
}

```

이제 Board 컴포넌트의 handleClick에 있는 setSquares 및 setXIsNext 호출을 새로운 onPlay 함수에 대한 단일 호출로 대체함으로써 사용자가 사각형을 클릭할 때 Game 컴포넌트가 Board를 업데이트할 수 있습니다.

```js
function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }
  //...
}
```



Board 컴포넌트는 Game 컴포넌트가 전달한 props에 의해 완전히 제어됩니다. 게임이 다시 작동하게 하려면 Game 컴포넌트에서 handlePlay 함수를 구현해야 합니다.

handlePlay가 호출되면 무엇을 해야 할까요? 이전의 보드는 업데이트된 setSquares를 호출했지만, 이제는 업데이트된 squares 배열을 onPlay로 전달한다는 걸 기억하세요.

handlePlay 함수는 리렌더링을 트리거하기 위해 Game의 state를 업데이트해야 하지만, 더 이상 호출할 수 있는 setSquares 함수가 없으며 대신 이 정보를 저장하기 위해 history state 변수를 사용하고 있습니다. 업데이트된 squares 배열을 새 히스토리 항목으로 추가하여 history를 업데이트해야 하고, Board에서 했던 것처럼 xIsNext 값을 반전시켜야 합니다.



```js
export default function Game() {
  //...
  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }
  //...
}
```

위에서 [...history, nextSquares] 는 history에 있는 모든 항목을 포함하는 새 배열을 만들고 그 뒤에 nextSquares를 만듭니다. (...history 전개 구문을 “history 의 모든 항목 열거”로 읽을 수 있습니다)

예를 들어, history가 ```[[null,null,null], ["X",null,null]]```이고 nextSquares 가 ```["X",null,"O"]```라면 새로운 [...history, nextSquares] 배열은 ```[[null,null,null], ["X",null,null], ["X",null,"O"]]```가 될 것입니다.




### 과거 움직임 보여주기 
이제 틱택토 게임의 히스토리를 기록하므로, 플레이어에게 과거 이동 목록을 보여줄 수 있습니다.

```<button>```과 같은 React 엘리먼트는 일반 JavaScript 객체이므로 애플리케이션에서 전달할 수 있습니다. React에서 여러 엘리먼트를 렌더링하려면 React 엘리먼트 배열을 사용할 수 있습니다.

이미 state에 이동 history 배열이 있으므로 이를 React 엘리먼트 배열로 변환해야 합니다. JavaScript에서 한 배열을 다른 배열로 변환하려면 배열 map 메서드를 사용하면 됩니다.


```js
[1, 2, 3].map((x) => x * 2) // [2, 4, 6]
```

map을 사용해 이동의 history를 화면의 버튼을 나타내는 React 엘리먼트로 변환하고, 과거의 이동으로 “점프”할 수 있는 버튼 목록을 표시하세요. Game 컴포넌트에서 history를 map 해보겠습니다.

```js
export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove) {
    // TODO
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
```
아래에서 코드가 어떻게 보이는지 확인할 수 있습니다. 개발자 도구 콘솔에 다음과 같은 오류 메시지가 표시되어야 합니다:

```console
경고: 배열 또는 반복자의 각 자식 요소는 고유한 “key” 속성을 가져야 합니다. `Game`의 렌더 메서드를 확인하세요.
```

map으로 history 배열을 반복할 때 전달한 함수 내에서 squares 인수는 history의 각 엘리먼트를 통과하고, move 인수는 각 배열 인덱스를 통과합니다: 0, 1, 2, … (대부분은 실제 배열 엘리먼트가 필요하지만, 이 경우에는 이동 목록을 렌더링하기 위해 인덱스만 있어도 됩니다.)

틱택토 게임 history의 각 이동에 대해 버튼 ```<button>```이 포함된 목록 항목 ```<li>```를 생성하세요. 버튼에는 (아직 구현하지 않은) jumpTo라는 함수를 호출하는 onClick 핸들러가 있습니다.

현재로서는 개발자 도구 콘솔에 게임의 발생한 동작 목록과 오류가 표시되어야 합니다. “key” 오류가 무엇을 의미하는지 알아보겠습니다.

### Key 선택하기

리스트를 렌더링할 때 React는 렌더링 된 각 리스트 항목에 대한 몇 가지 정보를 저장합니다. 리스트를 업데이트할 때 React는 무엇이 변경되었는지 확인해야 합니다. 리스트의 항목은 추가, 제거, 재정렬 또는 업데이트될 수 있습니다.

아래의 리스트가

```js
<li>Alexa: 7 tasks left</li>
<li>Ben: 5 tasks left</li>
```

다음과 같이 변한다고 상상해 보세요.
```js
<li>Ben: 9 tasks left</li>
<li>Claudia: 8 tasks left</li>
<li>Alexa: 5 tasks left</li>
```

아마 task의 개수가 업데이트 되었을 뿐만 아니라 Alexa와 Ben의 순서가 바뀌고 Claudia가 두 사람 사이에 추가되었다고 생각할 것입니다. 그러나 React는 컴퓨터 프로그램이므로 우리가 의도한 바가 무엇인지 알지 못합니다. 그러므로 리스트의 항목에 key 프로퍼티를 지정하여 각 리스트의 항목이 다른 항목과 다르다는 것을 구별해 주어야 합니다. 만약 데이터베이스에서 데이터를 불러와서 사용한다면 Alexa, Ben, Claudia의 데이터베이스 ID를 key로 사용할 수 있습니다.

```js
<li key={user.id}>
  {user.name}: {user.taskCount} tasks left
</li>
```


리스트가 다시 렌더링 되면 React는 각 리스트 항목의 key를 가져와서 이전 리스트의 항목에서 일치하는 key를 탐색합니다. 현재 리스트에서 이전에 존재하지 않았던 key가 있으면 React는 컴포넌트를 생성합니다. 만약 현재 리스트에 이전 리스트에 존재했던 key를 가지고 있지 않다면 React는 그 key를 가진 컴포넌트를 제거합니다. 두 key가 일치한다면 해당 컴포넌트는 이동합니다.

key는 각 React가 각 컴포넌트를 구별할 수 있도록 하여 컴포넌트가 다시 렌더링 될 때 React가 해당 컴포넌트의 state를 유지할 수 있게 합니다. 컴포넌트의 key가 변하면 컴포넌트는 제거되고 새로운 state와 함께 다시 생성됩니다.

key는 React에서 특별하고 미리 지정된 프로퍼티입니다. 엘리먼트가 생성되면 React는 key 프로퍼티를 추출하여 반환되는 엘리먼트에 직접 key를 저장합니다. key가 props로 전달되는 것처럼 보일 수 있지만, React는 자동으로 key를 사용해 업데이트할 컴포넌트를 결정합니다. 부모가 지정한 key가 무엇인지 컴포넌트는 알 수 없습니다.

동적인 리스트를 만들 때마다 적절한 key를 할당하는 것을 강력하게 추천합니다. 적절한 key가 없는 경우 데이터를 재구성하는 것을 고려해 보세요.

key가 지정되지 않은 경우, React는 경고를 표시하며 배열의 인덱스를 기본 key로 사용합니다. 배열 인덱스를 key로 사용하면 리스트 항목의 순서를 바꾸거나 항목을 추가/제거할 때 문제가 발생합니다. 명시적으로 key={i}를 전달하면 경고는 사라지지만 배열의 인덱스를 사용할 때와 같은 문제가 발생하므로 대부분은 추천하지 않습니다.

key는 전역적으로 고유할 필요는 없으며 컴포넌트와 해당 컴포넌트의 형제 컴포넌트 사이에서만 고유하면 됩니다.


### 시간여행 구현하기

틱택토 게임의 기록에서 과거의 각 이동에는 해당 이동의 일련번호인 고유 ID가 있습니다. 이동은 중간에 순서를 바꾸거나 삭제하거나 삽입할 수 없으므로 이동 인덱스를 key로 사용하는 것이 안전합니다.

Game 함수에서 ```<li key={move}>```로 key를 추가할 수 있으며 렌더링 된 게임을 다시 로드하면 React의 “key” 에러가 사라질 것입니다.

```js
const moves = history.map((squares, move) => {
  //...
  return (
    <li key={move}>
      <button onClick={() => jumpTo(move)}>{description}</button>
    </li>
  );
});
```

jumpTo를 구현하기 전에 사용자가 현재 어떤 단계를 보고 있는지를 추적할 수 있는 Game 컴포넌트가 필요합니다. 이를 위해 기본값이 0인 currentMove 라는 새 state 변수를 정의하세요.

```js
export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[history.length - 1];
  //...
}
```

다음으로 Game 내부의 jumpTo 함수를 업데이트하여 해당 currentMove를 업데이트하세요. 또한 currentMove를 변경하는 숫자가 짝수면 xIsNext를 true로 설정하세요.

```js
export default function Game() {
  // ...
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }
  //...
}
```

이제 사각형을 클릭할 때 호출되는 Game의 handlePlay 함수 내용을 두 가지 변경하겠습니다.

* ”시간을 거슬러 올라가서” 그 시점에서 새로운 이동을 하는 경우 해당 시점까지의 히스토리만 유지해야 합니다. history의 모든 항목(... 전개 구문) 뒤에 nextSquares를 추가하는 대신 history.slice(0, currentMove + 1)의 모든 항목 뒤에 추가하여 이전 히스토리의 해당 부분만 유지하도록 하겠습니다.
* 이동할 때마다 최신 히스토리 항목을 가리키도록 currentMove를 업데이트하세요.

```js
function handlePlay(nextSquares) {
  const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
  setHistory(nextHistory);
  setCurrentMove(nextHistory.length - 1);
  setXIsNext(!xIsNext);
}
```

마지막으로 항상 마지막 동작을 렌더링하는 대신 현재 선택한 동작을 렌더링하도록 Game 컴포넌트를 수정하겠습니다.

```js
export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];

  // ...
}
```

게임 히스토리의 특정 단계를 클릭하면 틱택토 보드가 즉시 업데이트되어 해당 단계가 발생한 시점의 보드 모양이 표시됩니다.

### 최종정리

코드를 자세히 살펴보면 currentMove가 짝수일 때는 xIsNext === true가 되고, currentMove가 홀수일 때는 xIsNext === false가 되는 것을 알 수 있습니다. 즉, currentMove의 값을 알고 있다면 언제나 xIsNext가 무엇인지 알아낼 수 있습니다.

이 두 가지 state를 모두 저장할 이유가 없습니다. 항상 중복되는 state는 피하세요. state에 저장하는 것을 단순화하면 버그를 줄이고 코드를 더 쉽게 이해할 수 있습니다. Game을 변경하여 더 이상 xIsNext를 별도의 state 변수로 저장하지 않고 currentMove를 기반으로 알아내도록 수정하겠습니다.

```js
export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }
  // ...
}
```

더 이상 xIsNext state 선언이나 setXIsNext 호출이 필요하지 않습니다. 이제 컴포넌트를 코딩하는 동안 실수를 하더라도 xIsNext가 currentMove와 동기화되지 않을 가능성이 없습니다.

### 마무리

축하합니다! 여러분은 틱택토 게임을 만들었습니다.

* 틱택토를 플레이할 수 있습니다.
* 플레이어가 게임에서 이겼을 때를 표시합니다.
* 게임이 진행됨에 따라 히스토리를 저장합니다.
* 플레이어가 게임 히스토리를 검토하고 게임 보드의 이전 버전을 볼 수 있습니다.
* 수고하셨습니다! 이제 React가 어떻게 작동하는지 어느 정도 이해하셨기를 바랍니다.

최종 결과물을 아래에서 확인하세요.

```js
import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
```
시간이 남거나 새로운 React 기술을 연습하고 싶다면 아래에 틱택토 게임을 개선할 수 있는 몇 가지 아이디어가 있습니다. 아이디어는 난이도가 낮은 순으로 정렬되어 있습니다.

1. 현재 이동에 대해서만 버튼 대신 “당신은 #번째 순서에 있습니다…”를 표시해 보세요.
2. Board를 하드 코딩 하는 대신 두 개의 루프를 사용하여 사각형을 만들도록 다시 작성해 보세요.
3. 동작을 오름차순 또는 내림차순으로 정렬할 수 있는 토글 버튼을 추가해 보세요.
4. 누군가 승리하면 승리의 원인이 된 세 개의 사각형을 강조 표시해 보세요. (아무도 승리하지 않으면 무승부라는 메시지를 표시하세요. )
5. 이동 히스토리 목록에서 각 이동의 위치를 형식(열, 행)으로 표시해 보세요.

이 자습서를 통해 엘리먼트, 컴포넌트, props, state를 포함한 React의 개념에 대해 살펴봤습니다. 이제 이러한 개념이 게임을 만들 때 어떻게 작동하는지 보았으니, React로 사고하기를 통해 앱의 UI를 만들 때 동일한 React 개념이 어떻게 작동하는지 확인해 보세요.

-----
## 4월 17일 강의(7주차)

### State 끌어올리기

```js (slice) 

const animals = ["ant", "bison", "camel", "duck","elephant"];

console.log(animals.slice(2,4));
// output => Array ["camel", "duck"]
console.log(animals.slice(1,5));
// output => Array ["bison", "camel", "duck","elephant"]


```

* 다음으로 인수 i를 handleClick에 전달 <br>
    아래와 같이 작업하면 작동 안함

    ``` js
    <Square value={squares[0]} onSquareClick={handleClick(0)} />

    ```

    handleClick(0) 호출은 보드 컴포넌트 렌더링의 일부가 됨 <br> handleClick(0)은 setSquares를 호출하여 보드 컴포넌트의 state를 변경하기 때문에 보드 컴포넌트 전체가 다시 렌더링<br> 하지만 이 과정에서 handleClick(0)은 다시 실행되기 때문에 무한 루프에 빠짐


* 9개의 서로 다른 함수를 정의하고 각각에 이름을 붙이는 것은 너무 장황<br>
    ```js
    <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
    ```
    화살표 함수로 짧게 정의 후 여러번 사용(무명함수는 일회성)

* 이제 모든 square 변경
    ```js
    return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
    );
    ```
    이제 보드에 클릭시 X 추가

* 이제 Board가 모든 state를 관리하므로 부모 Board 컴포넌트는 자식 Square 컴포넌트가 올바르게 표시될 수 있도록 props를 전달<br>
Square를 클릭하면 자식 컴포넌트가 Board의 state를 업데이트 하도록 요청<br>
Board의 state가 변경되면 Board 컴포넌트와 모든 자식 Square 컴포넌트가 자동으로 다시 렌더링<br>
Board 컴포넌트에 속한 모든 사각형의 state를 유지하면 나중에 승자를 결정가능<br>


##### [정리]
사각형 클릭시 button이 square로부터 onclick prop으로 받은 함수 실행<br>
함수는 0을 인수로 handleclick 호출<br>
jsx에서 해당 함수를 직접 정의<br>
square 컴포넌트는 해당 함수를 onSquareClick prop로 받음
handleClick은 인수 0을 사용하여 squares 배열의 첫 번째 엘리먼트를 null에서 X로 업데이트<br>
Board 컴포넌트의 squares state가 업데이트되어 Board와 그 모든 자식이 다시 렌더링, 인덱스가 0인 Square 컴포넌트의 value prop가 null에서 X로 변경<br>
최종적으로 사용자는 왼쪽 위 사각형을 클릭한 후 비어있는 사각형이 X로 변경된 것을 확인할 수 있습니다.<br>
```
※중요※
DOM <button> 엘리먼트의 onClick 어트리뷰트는 빌트인 컴포넌트이기 때문에 React에서 특별한 의미
 Square의 onSquareClick prop나 Board의 handleClick 함수에 어떠한 이름을 붙여도 코드는 동일하게 작동 React에서는 주로 이벤트를 나타내는 prop에는 onSomething과 같은 이름을 사용하고, 이벤트를 처리하는 함수를 정의 할 때는 handleSomething과 같은 이름을 사용
```


#### 불변성이 왜 중요할까

handleClick에서 기존 배열을 수정하는 대신 .slice()를 호출하여 squares 배열의 사본을 생성하는 방법에 주목

squares 배열을 변형한 경우의 모습
```js
const squares = [null, null, null, null, null, null, null, null, null];
squares[0] = 'X';
// Now `squares` is ["X", null, null, null, null, null, null, null, null];
```

squares 배열을 변형하지 않고 데이터를 변경한 경우의 모습
```js
const squares = [null, null, null, null, null, null, null, null, null];
const nextSquares = ['X', null, null, null, null, null, null, null, null];
// Now `squares` is unchanged, but `nextSquares` first element is 'X' rather than `null`
```

1. 불변성을 사용하면 복잡한 기능을 훨씬 쉽게 구현<br>
    우리는 이 자습서의 뒷부분에서 게임의 진행 과정을 검토하고 과거 움직임으로 “돌아가기”를 할 수 있는 “시간 여행” 기능을 구현할 예정<br> 특정 작업을 실행 취소하고 다시 실행하는 기능은 이 게임에만 국한된 것이 아닌 앱의 일반적인 요구사항<br> 직접적인 데이터 변경을 피하면 이전 버전의 데이터를 그대로 유지하여 나중에 재사용(또는 초기화)

2. 불변성을 사용하는 것의 또 다른 장점이 있습니다.

### 교대로 두기 - 1

기본적으로 첫 번째 이동을 “X”로 설정, 이제 보드 컴포넌트에 또 다른 state를 추가하여 추적

```js
function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  // ...
}
```
플레이어가 움직일 때마다 다음 플레이어를 결정하기 위해 불리언 값인 xIsNext가 반전되고 게임의 state가 저장

```js
export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext); // 
  }

  return (
    //...
  );
}
```


이렇게 하면 게임이 좀 더 흥미로워질 수 있지만 지금은 원래의 규칙을 유지
지금은 X와 O로 사각형을 표시할 때 먼저 해당 사각형에 이미 X 또는 O값이 있는지 확인하고 있지 않습니다. 일찍이 돌아와서 이 문제를 해결하기 위해 사각형에 이미 X와 O가 있는지 확인하겠습니다. 사각형이 이미 채워져 있는 경우 보드의 state를 업데이트하기 전에 handleClick 함수에서 조기에 return 하겠습니다.
```js
function handleClick(i) {
  if (squares[i]) {
    return;
  }
  const nextSquares = squares.slice();
  //...
}
```

### 승자 결정하기

이제 어느 플레이어의 다음 차례인지 표시했으니, 게임의 승자가 결정되어 더 이상 차례를 만들 필요가 없을 때도 표시<br> 이를 위해 9개의 사각형 배열을 가져와서 승자를 확인하고 적절하게 'X' , 'O' , 또는 null을 반환하는 도우미 함수 calculateWinner를 추가<br> calculateWinner 함수에 대해 걱정X 이 함수는 React에서만 국한되는 함수가 아님


```word
※중요※ 
 calculateWinner 함수를 Board의 앞에 정의하든 뒤에 정의하든 상관X
 여기에선 컴포넌트를 편집할 때마다 편집기 상에서 스크롤 할 필요가 없도록 마지막에 배치
```

Board 컴포넌트의 handleClick 함수에서 calculateWinner(squares)를 호출하여 플레이어가 이겼는지 확인<br> 이 검사는 사용자가 이미 X 또는 O가 있는 사각형을 클릭했는지를 확인하는 것과 동시에 수행<br> 두 경우 모두 함수를 조기 반환

```js
function handleClick(i) {
  if (squares[i] || calculateWinner(squares)) {
    return;
  }
  const nextSquares = squares.slice();
  //...
}
```


게임이 끝났을 때 플레이어에게 알리기 위해 “Winner: X” 또는 “Winner: O”라고 표시<br> 이렇게 하려면 Board 컴포넌트에 status 구역을 추가<br>게임이 끝나면 status는 승자를 표시하고 게임이 진행 중인 경우 다음 플레이어의 차례를 표시

```js
export default function Board() {
  // ...
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        // ...
  )
}
```

### 시간여행 추가하기

게임의 이전 동작으로 “시간을 거슬러 올라가는” 기능

squares 배열을 변형하면 시간 여행을 구현하기는 매우 어려움<br>
하지만 우리는 slice()를 사용하여 매번 이동할 때마다 squares 배열의 새 복사본을 만들고 이를 불변으로 처리<br>덕분에 squares 배열의 모든 과거 버전을 저장할 수 있고 이미 발생한 턴 사이를 탐색<br>

과거의 squares 배열을 history라는 다른 배열에 저장하고 이 배열을 새로운 state 변수로 저장<br> history 배열은 첫 번째 이동부터 마지막 이동까지 모든 보드 state를 나타내며 다음과 같음

```js
[
  // Before first move
  [null, null, null, null, null, null, null, null, null],
  // After first move
  [null, null, null, null, 'X', null, null, null, null],
  // After second move
  [null, null, null, null, 'X', null, null, null, 'O'],
  // ...
]
```

-----
## 4월 10일 강의(6주차)

### props를 통해 데이터 전달하기

* React의 component architecture를 사용해서 재사용할 수 있는 component를 만들어서 지저분하고 중복된 코드를 삭제<br>
   Board component를 만들고, Square component의 내용을 복사.<br>
   Square component의 button을 하나만 남기고 모두 삭제.<br>
   Board component의 button을 Square component로 변경<br>
   App에서 호출하는 component를 Square에서 Board로 변경<br>
   정상적으로 출력이 되는지 확인<br>
   여기까지 하면 component는 깔끔하게 정리 됐지만, 숫자 출력이 1
   이 문제를 해결하기 위해 props를 사용하여 각 사각형이 가져야 할 값을 부모 component[Board]에서 자식 component[Square]로 전달<br>
   component를 호출하는 쪽이 부모 component입니다.
  
[사용자와 상호작용하는 컴포넌트 만들기 한글 문서에서 "사각형"이라고 번역된 것은 모두 Square 컴포넌트]

* Square 컴포넌트를 클릭하면 X로 채워지게 코드를 수정
   * 먼저 Square 내부에 handleClick 함수를 선언
   * 다음 Square 컴포넌트에서 반환되는 JSX 버튼의 props에 onClick을 추가

* 이제 사각형을 클릭하면, 브라우저의 console 탭에 "clicked!" 라는 로그가 표시
  사각형을 한 번 더 클릭하면 "clicked!" 라는 로그가 다시 생성
  다음으로 사각형 컴포넌트가 클릭된 것을 "기억"하고 "X"표시로 채우기
  컴포넌트는 무언가 "기억"하기 위해 static을 사용
  React는 상태 기억을 위해 useState라는 Hook을 제공
  Square 현재 값은 state에 저장하고 Square가 클릭하면 값이 변경되게끔

1. 파일 상단에서 useState를 import
2. Sqaure 컴포넌트에서 value prop을 제거, 대신 useState를 사용
3. Square 컴포넌트의 시작 부분에 useState를 호출하고, value라는 이름의 state 변수를 반환
* value는 값을 저장하는 변수, setValue는 값을 변경하는데 사용하는 함수
   useState에 전달된 null은 이 state 변수의 초기값으로 현재 value는 null이라는 의미
   앞에서 Square 컴포넌트는 더 이상 props를 사용하지 않게 수정
4. 따라서 Board 컴포넌트가 생성한 9개의 Square 컴포넌트에서도 value prop을 제거
* 이제 Square가 클릭되었을때 "X"를 표시하도록 변경
5. console.log("clicked!"); 이벤트 핸들러를 setValue('X');로 변경
* onClick 핸들러에서 set 함수를 호출해서 이 클릭될 때마다 Square를 다시 렌더링
   업데이트 후 Square의 value는 'X'가 되므로, 앞으로 Board에서 'X'가 표시
   Square를 클릭하면 'X'가 표시
   각 Square에는 고유한 state 존재
   각각의 Square에 저장된 value는 다른 Square와 완전히 독립적
   컴포넌트에서 set 함수를 호출하면 React는 그 안에 있는 자식 컴포넌트도 자동으로 업데이트

### state 끌어올리기

* 현재 각 Square 컴포넌트는 게임 state의 일부를 기억
   틱택토 게임에서 승자를 확인하려면 Board가 9개의 Square 컴포넌트 각각의 state를 기억하고 있어야 함
   Board가 각각의 Square에 state에 "요청"해야 한다고 생각.
   이 접근 방식은 React에서 기술적으로는 가능하지만, 코드가 이해하기 어렵고 버그에 취약하며 리팩토링하기 어렵기 때문에 권장X
   가장 좋은 방법은 게임의 state를 각 Square가 아닌 부모 컴포넌트인 Board에 저장하는 것.
   Board 컴포넌트는 각 Square에 숫자를 전달했을 때와 같이 prop을 전달하여 각 Square에 표시할 내용을 정할 수 있음
   여러 자식 컴포넌트에서 데이터를 수집하거나 두 자식 컴포넌트가 서로 통신하도록 하려면, 부모 컴포넌트에서 공유 state를 선언
   부모 컴포넌트는 props를 통해 해당 state를 자식 컴포넌트에 전달
   이렇게 하면 자식 컴포넌트가 서로 동기화되고, 부모 컴포넌트와도 동기화
   React 컴포넌트를 리팩토링 할 때 부모 컴포넌트로 state를 끌어올리는 것은 많이 사용하는 방법

1. Board 컴포넌트를 편집해서 9개 Square에 해당되는 9개의 null의 배열을 기본값으로 하는 state 변수 squares를 선언
   Array(9).fill(null)은 9개의 엘리먼트로 배열을 생성하고, 각 엘리먼트를 null로 설정 (참고: developer.mozilla.org)
   그리고 state 변수 squares와 함수 setSqaures를 선언
   배열의 각 항목은 각 Square 컴포넌트의 값에 해당
   보드를 채우면, squares 배열은 다음과 같은 모양이 됨
   ['O', null, 'X', 'X', 'X', 'O', 'O', null, null]
#### component 분리하기 ⚠ Board component가 export default로 선언된 것을 보면, component가 분리되었다는 것을 알 수 있음

우리도 컴포넌트를 모두 분리해서 만듦
문서에서는 Board와 Square를 함께 두었지만 우리는 모두 분리
#### [분리 순서]
   1. component 이름과 동일한 파일 생성
   2. 해당 파일에 코드를 복사하고 export default 키워드 추가
   3. 필요한 component와 useState 추가
   4. App.js에서 해당 코드를 삭제하고, Board component를 import
   5. App.js에서 useState의 import를 제거
   6. 정상적으로 동작하는지 확인
   
2. 이제 Board 컴포넌트는 렌더링하는 각 Square 컴포넌트에 value prop을 전달
3. 다음으로 Board 컴포넌트에서 각 value prop을 받을 수 있도록 Square 컴포넌트를 수정
4. 이를 위해 Square 컴포넌트에서 value의 상태 추적과 버튼의 onClick prop을 제거


* 이제 각 Square는 'X', 'O', 또는 빈 Square인 경우 null이 되는 value prop을 받음
   다음으로 Square가 클릭되었을 때 발생하는 동작을 변경
   이제 Board 컴포넌트가 Square를 관리하므로 Square가 Board의 state를 업데이트할 방법
   컴포넌트는 자신이 정의한 state에만 접근할 수 있으므로 Square에서 Board의 state를 직접 변경X
   대신에 Board 컴포넌트에서 Square 컴포넌트로 함수를 전달하고, Square가 클릭될 때 Square가 해당 함수를 호출
  
5. Square 컴포넌트가 클릭될 때 호출할 함수부터 시작하겠습니다. onSquareClick으로 해당 함수를 호출
6. 다음으로, Square 컴포넌트의 props에 onSquareClick 함수를 추가
7. 이제 onSquareClick prop을 Board 컴포넌트의 handleClick 함수와 연결
   * onSquareClick 함수를 handleClick과 연결하려면 첫번째 Square 컴포넌트의 onSquareClick prop에 해당 함수를 전달
8. 마지막으로 보드 컴포넌트 내부에 handleClick 함수를 정의하여, 보드의 state를 담고 있는 squares 배열을 업데이트
  

-----
## 4월 3일 강의(5주차)

### 이벤트에 응답하기

* component 내부에 event handler 함수를 선언하면 event에 응답
   onClick={handleClick}의 끝에 소괄호()가 없는 것을 주목
   함수를 호출하지 않고 전달만 하면 됨
   React는 사용자가 버튼을 클릭할 때 이벤트 핸들러를 호출
  
### 화면 업데이트하기

* component가 특정 정보를 "기억"해 두었다가 표시하기를 원하는 경우가 있음
   예를 들어 버튼이 클릭된 횟수를 세고 싶을 때
   이렇게 하려면 component에 state를 추가
   먼저, React에서 useState를 import
  
``` import { useState } from 'react'; ```


* 이 코드를 보면 useState는 react 파일 안에 Named Exports로 선언되어 있는 여러개의 component중 하나라는 것을 앎
   이제 component 내부에 state 변수를 선언
```
function MyButton() {
    const [count, setCount] = useState(0);
    // ...
}
```
* useState로부터 현재의 state를 저장할 수 있는 변수인 count와 이를 업데이트할 수 있는 함수인 setCount를 얻음
   이름은 자유롭게 지정할 수 있지만 [something, setSomething]으로 작성하는 것이 일반적
   즉, 변수 이름과 변수 이름 앞에 set을 붙인 업데이트 함수를 관용적으로 사용
   버튼이 처음 표시될 때는 useState()에 0을 전달했기 때문에 count가 0이 됨
   state를 변경하고 싶다면 setCount를 실행하고 새 값을 전달
```
function Button() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    );
}
```

### Hook 사용하기

* use로 시작하는 함수를 Hook
   useState는 React에서 제공하는 내장 Hook
   다른 내장 Hook은 API 참고서
   또한 기존의 것들을 조합하여 자신만은 Hook을 작성 (사용자 Hook)
   Hook은 다른 함수보다 더 제한적 예를 들면,
   component 또는 다른 Hook의 상단에서만 Hook을 호출
   조건이나 반복문에서 useState를 사용하고 싶다면 새 컴포넌트를 추출하여 그곳에 넣기
  
##### [Hooks의 사용 규칙(Rules of Hooks)]
   * Hook은 React의 렌더링 및 상태 관리 매커니즘과 밀접하게 연결되어 있음
      최상위에서만 호출, if, for, while 등의 블록 내부에서 Hooks를 호출X 함수의 조건문 내부에서 호출하면 실행 순서가 달라질 수 있기 때문
      
      React 함수형 component 또는 사용자 Hook 내부에서만 사용 가능,  일반적인 JavaScript 함수에서 useState, useEffect 등의 Hook을 사용X

##### [왜 이런 제한이 필요한가?]
   * React의 동작을 예측 가능하고, 안정성을 높이기 위해 필요한 규칙
      rendering 순서를 보장하기 위해 조건문이나 반복문 안에서 Hooks를 사용하면 매 rendering마다 Hook의 호출 순서가 달라질 수 있기 때문에 React가 상태를 제대로 추적X
      불필요한 사이드 이펙트 방지 component가 여러번 rendering 될 때마다 동일한 순서로 Hook이 실행되어야 React가 의도한 동작을 수행할 수 있습니다.
   
##### [왜 function형 컴포넌트에서만 Hook을 사용할까?]
   * Class형 component는 lifecycle 함수를 통해서 상태 관리
   * 그런 이유때문에 Class형 component는 유지보수가 어렵고 복잡
   * React는 component의 상태 관리(lifecycle)와 로직을 더 간결하게 만들기 위해 Hooks를 도입
   * 따라서 React 팀은 function형 component를 권장
   * Hook은 function형 component 전용으로 설계
   * 이런 이유때문에 function형 component에서만 Hook을 사용하는 것

### Component 간 데이터 공유

* 공식 문서에서는 MyButton과 MyApp을 계속 수정해 가면서 설명을 하고 있어서 이전 상태를 확인하기가 어려움
   물론 변경이 있을 때마다 꼼꼼히 commit을 해두면 checkout을 통해서 확인이 가능
   다만 이 경우 checkout을 반복해야 하기 때문에 확인하는데 불편함
   따라서 실습은 꼭 필요한 경우를 제외하고는 별도의 component를 만들어 사용.

* 사이트에서는 MyButton으로 설명하고 있지만, 우리는 CountState로 작성했던 것을 기억하고 사이트의 설명을 봐야함
   [9절에서 "왜 변수는 count 하나인데 버튼 3개의 데이터가 모두 다른 state를 갖는 것일까?"라는 의문]
   각각의 CountState component는 독립적인 count가 있는 것처럼 동작했고, 각 버튼을 클릭하면 클릭한 버튼의 count만 변경
   각 component 객체가 독립적으로 동작
   component는 하나지만 count 변수도 객체로 여러개 복사된 것이나 마찬가지
   하지만 데이터를 공유하고 항상 함께 업데이트하기 위한 component가 필요한 경우가 많음
   두 개의 CountState2 component가 동일한 count를 표시하고 함께 업데이트하려면, state를 개별 버튼에서 모든 버튼이 포함된 가장 가까운 component 안으로 이동
   여기서 이야기하는 제일 가까운 component는 App component입니다. 외부에서 두 개 호출하는 것이 아니라, 내부에서 같은 count변수를 사용하는 것

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

* JSX를 사용하면 자바스크립트에 마크업을 넣을 수 있음
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
* src 속성에 user.imageUrl 변수의 값을 전달하여 이미지의 경로를 설정하고 있음
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


