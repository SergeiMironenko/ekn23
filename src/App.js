import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header class="navbar navbar-default navbar-fixed-top navbar-inner">

        <div class="container" ng-controller="mainCtl" ng-cloak>
          <nav class="navbar navbar-fixed-top">

            <div class="container-fluid">
              <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/"><img src="img/NSTU_Logo_grey.png" alt="img/NSTU_Logo_grey.png" /></a>
              </div>


              <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1" ng-controller="mainCtl" ng-cloak>
                <ul class="nav navbar-nav">
                  <li ng-repeat="x in menu">
                    <a href="11x.PATH22">11 x.NAME 22</a>
                  </li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                  <li><a href="11logoutURL22"><span class="glyphicon glyphicon-log-out"></span>Выход</a></li>
                </ul>
              </div>
            </div>
          </nav>

        </div>
      </header>
      <div class="content">
        <div ng-view></div>
      </div>
    </div>
  );
}

export default App;
