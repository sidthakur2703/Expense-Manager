import React from 'react';

import './App.css';
import Home from './Home';
import NewsList from './News/NewsList';
import { BrowserRouter as Router , Link , Route,Switch } from 'react-router-dom';


const App = () => {


  return (
    
    <Router>
      < div >
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 nbar">
        <li class="nav-item nbar">
          <a class="navbar-brand" aria-current="page"><Link to="/">Home</Link></a>
        </li>
        <li class="nav-item nbar">
          <a class="navbar-brand"><Link to="/news">News</Link> </a>
        </li>
              </ul>
              </div>
              </div>
      </nav>

      <Switch>
          
      <Route path="/news">
            <NewsList />
          </Route>

          <Route path="/" >
            <Home />
          </Route>

        </Switch>  

    </div>
  </Router>
  )


}

export default App;