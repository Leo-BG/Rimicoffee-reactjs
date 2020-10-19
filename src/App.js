
import { auth } from "./firebase.js";
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Checkout from './components/checkout/Checkout';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import { useStateValue } from './components/Home/StateProvider';
import Login from './components/Login/Login';
import Footer from "./components/footer/Footer.jsx";

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    //;
    auth
      .onAuthStateChanged((userAuth) => {
        console.log(userAuth);
        if (userAuth) {
          dispatch({
            type: 'SET_USER',
            user: userAuth
          })
        } else {
          dispatch({
            type: 'SET_USER',
            user: null
          })
        }
        //when data is loaded, set loading to false

      });
  }, [])


  // return () => {
  //   unsubscribe();
  // }

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
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
