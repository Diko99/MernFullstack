import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import 'assets/scss/style.scss';
import LandingPages from 'pages/LandingPages';
import Example from 'pages/Example';
import DetailPage from 'pages/DetailPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' exact component={LandingPages} />
        <Route path='/properties/:id' exact component={DetailPage} />
        <Route path='/example' component={Example} />
      </Router>
    </div>
  );
}

export default App;
