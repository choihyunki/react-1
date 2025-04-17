# 202130133 최현기

### 📖 [[React 강의 공식문서](https://ko.react.dev/)]
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


