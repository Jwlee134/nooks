import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

const App = () => {
  // useTitle 함수를 호출하는 동시에 변수 titleUpdater에 return 값 setTitle 부여
  const titleUpdater = useTitle("Loading...");
  // return 값 setTitle()을 부여받았으므로 titleUpdater("Home") 처럼 사용 가능
  setTimeout(() => titleUpdater("Home"), 2000);
  return <div className="App"></div>;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
