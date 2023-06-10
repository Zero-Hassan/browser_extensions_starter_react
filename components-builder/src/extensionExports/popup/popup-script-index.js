import React from 'react';
import ReactDOM from 'react-dom/client';
import POPUP_APP from './popup-app';

const rootElement=document.createElement("div");
document.body.appendChild(rootElement);
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <POPUP_APP/>
  </React.StrictMode>
);
