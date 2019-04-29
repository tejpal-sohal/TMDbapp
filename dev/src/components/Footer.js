// Main Footer Component
import React from 'react';

function Footer() {
    const date = new Date()
    return <footer>
        <div className="container">
            <p className="float-right">
                <a href="#">Back to top</a>
            </p>
            <p>The Movie Database (TMDb) is a community built movie and TV database.  TMDb App&copy; {date.getFullYear()}</p>
        </div>
    </footer>;

}

export default Footer 