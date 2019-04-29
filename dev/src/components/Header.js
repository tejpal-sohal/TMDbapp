// Header Component

import React from 'react';

function Header () {
    return <header>
    <div className="collapse bg-dark" id="navbarHeader">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-md-7 py-4">
            <h4 className="text-white">Let's talk about TMDb</h4>
            <p className="text-muted">The Movie Database (TMDb) is a community built movie and TV database. Every piece of data has been added by our amazing community dating back to 2008. TMDb's strong international focus and breadth of data is largely unmatched and something we're incredibly proud of. Put simply, we live and breathe community and that's precisely what makes us different.</p>
          </div>
          <div className="col-sm-4 offset-md-1 py-4">
            <h4 className="text-white">bulit by</h4>
            <ul className="list-unstyled">
              <li><a href="http://tejpal-sohal.github.io/" target="_blank" className="text-white">Tej Sohal</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="navbar navbar-dark bg-dark shadow-sm">
      <div className="container d-flex justify-content-between">
        <a href="#" className="navbar-brand d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true" className="mr-2" viewBox="0 0 24 24" focusable="false"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>
          <strong>Album</strong>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
  </header>;
    
}

export default Header 