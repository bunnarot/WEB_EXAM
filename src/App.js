import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { Home1,Home} from './components';





class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <ul>
                <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
              <li><NavLink to="/Home1"     activeClassName="active">President</NavLink></li>


            </ul>
          </div>
          <div className="App-intro">
            <Switch>
                <Route path="/" component={Home} exact={true} />

                <Route path="/Home1" component={Home1}  />

            </Switch>

          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
