import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import View1 from './view1/view1'
import View2 from './view2/view2'
import View4 from './view4/view4'
// import View5 from './view5/view5'
// import View6 from './view6/view6'
// import View7 from './view7/view7'
// import View8 from './view8/view8'
import View9 from './view9/view9'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <View1 /> */}
    {/* <View2 /> */}
    {/* <View4 /> */}
    <View9 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
