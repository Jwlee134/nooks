import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useClick = (sayHello) => {
  const element = useRef();
  // 이 위치에서 console.log(element)를 해보면 undefined가 나오는데
  // 이유는 이 함수가 App 함수 내에서 h1에 ref가 전달되기 전에 호출되었기 때문이다.
  // 따라서 element의 내용은 ref가 전달된 후, 즉 <h1 ref={title}>Hi</h1> 의 바로 밑이나
  // 컴포넌트가 렌더링 된 후, 즉 useEffect()의 내에서 확인 가능하다.
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", sayHello);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", sayHello);
      }
    };
  }, []);
  return element;
};

//

const App = () => {
  const sayHello = () => console.log("Hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
