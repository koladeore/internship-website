import React from 'react';
import { Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import HomePage from './Pages/Home/index.js';
import AboutPage from './Pages/About/index.js';

function App(){
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/about" component={AboutPage}></Route>
      </Switch>
    </div>
  );
}
export default App;
