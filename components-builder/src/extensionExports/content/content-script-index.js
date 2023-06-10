import React from 'react';
import ReactDOM from 'react-dom/client';
import CONTENT_APP from './content-app';

const rootElement = document.createElement("div");
document.body.appendChild(rootElement);
const root = ReactDOM.createRoot(rootElement);
root.render(
    <React.StrictMode>
        <CONTENT_APP />
    </React.StrictMode>
);