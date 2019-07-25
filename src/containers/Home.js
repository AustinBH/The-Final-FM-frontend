import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MySongs from '../components/MySongs';
import Search from '../components/Search';

class Home extends Component {

    render() {
        if (this.props.user && this.props.user.id) {
            return (
                <header>
                    <Router>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/my-songs">My Songs</Link>
                            </li>
                            <li>
                                <Link to="/search">Artist Search</Link>
                            </li>
                        </ul>
                        <Route path="/" exact component={Home} />
                        <Route path="/my-songs" exact component={MySongs} />
                        <Route path="/search" exact component={Search} />
                    </Router>
                </header>  
            )
        } else {
           return null
        }  

    }
}

export default Home