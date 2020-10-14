
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Checkout from './components/checkout/Checkout';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import { useStateValue } from './components/Home/StateProvider';
import Login from './components/Login/Login';
import { auth } from 'firebase';

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is signed in.
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    }
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">

            <Login />

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
