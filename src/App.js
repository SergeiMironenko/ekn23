import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import View1 from './view1/view1';
import View2 from './view2/view2';
import View3 from './view3/view3';
import View4 from './view4/view4';
import View5 from './view5/view5';
import View6 from './view6/view6';
import View7 from './view7/view7';
import View8 from './view8/view8';
import View9 from './view9/view9';
import Links from './functions/links';
import Test from './functions/test';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const header =
      <header className="navbar navbar-default navbar-fixed-top navbar-inner">

        <div className="container" ng-controller="mainCtl" ng-cloak>
          <nav className="navbar navbar-fixed-top">

            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="/"><img src="img/NSTU_Logo_grey.png" alt="img/NSTU_Logo_grey.png" /></a>
              </div>


              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1" ng-controller="mainCtl" ng-cloak>
                <ul className="nav navbar-nav">
                  <li ng-repeat="x in menu">
                    <a href="11x.PATH22">11 x.NAME 22</a>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="11logoutURL22"><span className="glyphicon glyphicon-log-out"></span>Выход</a></li>
                </ul>
              </div>
            </div>
          </nav>

        </div>
      </header>;
    return (
      <div>
        {header}
        <div className="content">
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Links />} />
              <Route path='view1' element={<View1 />} />
              <Route path='view2' element={<View2 />} />
              <Route path='view3' element={<View3 />} />
              <Route path='view4' element={<View4 />} />
              <Route path='view5' element={<View5 />} />
              <Route path='view6' element={<View6 />} />
              <Route path='view7' element={<View7 />} />
              <Route path='view8' element={<View8 />} />
              <Route path='view9' element={<View9 />} />
              <Route path='test' element={<Test />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
