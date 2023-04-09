import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
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
        </header>
        <div className="content">
          <div ng-view></div>
        </div>
      </div>
    );
  }
}

export default App;
