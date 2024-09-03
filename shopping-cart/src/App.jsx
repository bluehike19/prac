import React from 'react'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <h1>Home Page</h1>
        </Route>
        <Route path="/about">
          <h1>About Page</h1>
        </Route>
        <Route path="/contact">
          <h1>Contact Page</h1>
        </Route>
      </Switch>
      <Footer />
    </Router>
    
  );
}


export default App