// Main App Component

import React from 'react';
import '../css/main.css';
import { BrowserRouter as Router, Route, Link, HashRouter, Switch} from "react-router-dom";
import Header from './Header'
import Footer from './Footer'
import Movie from './Movie';
import Tv from './TvShows';
import logo from '../img/logo.png'
import People from './People';


function App() {
  return (
    <HashRouter>
      <Header/>
      <div>
        <main role="main">
          <section className="jumbotron text-center">
            <img style={{ width: '50%' }} src={logo} />
          </section>
          <div className="container custom">
            <ul className="buttons-wrapper">
              <li><Link className="btn btn-dark" to="/">Movie</Link></li>
              <li><Link className="btn btn-dark" to="/tv">TV</Link></li>
              <li><Link className="btn btn-dark" to="/people">People</Link></li>
            </ul>
          </div>
          <div className="album py-5 bg-light">
            <div className="container">
              <Route exact path="/" component={Movie} />
              <Route path="/tv" component={Tv} />
              <Route path="/people" component={People} />
            </div>
          </div>

        </main>
        <Footer />
      </div>
    </HashRouter >

  );
}

export default App;
