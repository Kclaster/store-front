import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './components/container-pages/HomePage';
import About from './components/container-pages/About';
import Fam from './components/container-pages/Fam';
import Shop from './components/container-pages/Shop';
import Kayak from './components/container-pages/Kayak';
import Services from './components/container-pages/Services';
import Team from './components/container-pages/Team';

import './App.css';

const App = () => {
  return (
    <div>
      <BrowserRouter basename="/58degrees">
        <div>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" exact component={About} />
          <Route path="/fam" exact component={Fam} />
          <Route path="/kayak" exact component={Kayak} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/services" exact component={Services} />
          <Route path="/team" exact component={Team} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
