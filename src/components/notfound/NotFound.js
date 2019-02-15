import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

class NotFound extends React.Component{
    render(){
        return(
            <div className="NotFound">
                <h1 className="NotFound-title">Oops! Page not found</h1> 

                <Link to="/" className="NotFound-link">Go To Homepage</Link>
            </div>
        );
    }
}

export default NotFound;
