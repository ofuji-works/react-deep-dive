import { mount } from "./core";

export const App = () => {
  // @ts-ignore
  return <h1>Hello World</h1>;
};

var rootEl = document.getElementById("root");
var node = mount(<App />);
rootEl && rootEl.appendChild(node);
