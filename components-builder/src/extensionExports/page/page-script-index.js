import React from 'react';
import ReactDOM from 'react-dom/client';
import PAGE_APP from './page-app';

const rootElement=document.createElement("div");
document.body.appendChild(rootElement);
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <PAGE_APP/>
  </React.StrictMode>
);
