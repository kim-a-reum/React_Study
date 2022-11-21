// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// react 18버전 쓸때는 이렇게 썼지만..

import { Global } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { globalStyles } from "./component/units/Global";

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// 17로 쓰려면 이 방식으로 써야한다
