import React from "react";
import ReactDom from "react-dom";

const App = () => {
  (window as any).hello();
  return <div>Hello World</div>;
};

ReactDom.render(<App />, document.getElementById("root"));
