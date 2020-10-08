import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>Đăng xuất</h1>
          </Route>
          <Route path="/login">
            <Header />
            <h1>Đăng nhập</h1>
          </Route>
          {/* default route */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
