// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import TextInputArea from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <TextInputArea />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import './index.css';

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
