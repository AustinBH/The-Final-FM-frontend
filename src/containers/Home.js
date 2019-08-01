import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Container, Jumbotron, Nav, Navbar } from 'react-bootstrap';
import logo from '../logo.svg';
import MySongs from '../components/MySongs';
import RandomSong from '../components/RandomSong';
import Search from './Search';
import HomePage from '../components/HomePage'

class Home extends Component {

    state = {
        randomSong: []
    }

    displayRandomSongs = () => {
        let randomSong = this.props.allSongs[Math.floor(Math.random() * this.props.allSongs.length)]
        this.setState({randomSong})
    }
 
    render() {
        return (
            <Container>
                <Router>
                    <Jumbotron id="jumbotron-color">
                        <div className='home'>
                            <RandomSong
                                randomSong={this.state.randomSong}
                                handleOnClick={this.displayRandomSongs}
                                likeSong={this.props.likeSong}
                            />
                        </div>
                        <h1>The Final FM</h1>
                        <hr/>
                        <Navbar bg="dark" variant="dark">
                            <Navbar.Brand>
                                <img src={logo} alt='brand' className='App-logo'/>
                            </Navbar.Brand>
                            <Nav className="mr-auto">
                                <NavLink
                                    className='btn btn-primary btn-sm'
                                    to="/" exact
                                    activeStyle={{ background: '#74B7AC' }}
                                >Home</NavLink>
                                <NavLink
                                    className='btn btn-primary btn-sm'
                                    to="/my-songs" exact
                                    activeStyle={{ background: '#74B7AC' }}
                                >My Songs</NavLink>
                                <NavLink
                                    className='btn btn-primary btn-sm'
                                    to="/search" exact
                                    activeStyle={{ background: '#74B7AC' }}
                                >Search</NavLink>
                                <NavLink
                                    className='btn btn-primary btn-sm'
                                    to='/' exact
                                    onClick={this.props.logout}
                                >Logout</NavLink>
                            </Nav>
                        </Navbar>
                        
                    </Jumbotron>
                    <Route path ="/" exact render={props => <HomePage {...props} user={this.props.user}/>} ></Route>
                    <Route path="/search" exact render={props => <Search {...props} songs={this.props.allSongs} likeSong={this.props.likeSong} />} />
                    <Route path="/my-songs" exact render={props => <MySongs {...props} songs={this.props.songs} deleteSong={this.props.deleteSong}/>} />
                </Router>
            </Container>
        )
        
    }
}

export default Home