import React from "react";
import ReactDOM from "react-dom";

const useFullScreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      runCb(true);
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    runCb(false);
  };
  return { element, triggerFull, exitFull };
};

const App = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullScreen(onFullS);
  return (
    <div style={{ height: "1000vh" }}>
      <div ref={element}>
        <img src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/88458001_516994418961477_73676556190351360_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=RdsstP65oHcAX_SXI0T&_nc_tp=25&oh=f1cf44f7647d0d5ae885c118e2c429a5&oe=5FD30FF3" />
        <button onClick={exitFull}>Exit Full Screen</button>
      </div>
      <button onClick={triggerFull}>Full Screen</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
