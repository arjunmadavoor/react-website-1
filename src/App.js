import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Route path='/Home' component={Home} />
        <Route path='/About' component={About} />
        <Route path='/Services' component={Services} />
        <Route path='/Products' component={Products} />
      </Router>
    </div>
  );
};

export default App;
