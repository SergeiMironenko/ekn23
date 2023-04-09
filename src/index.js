import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import View1 from './view1/view1'
import View2 from './view2/view2'
// import View4 from './view4/view4'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <View1 /> */}
    <View2 />
    {/* <View4 /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
