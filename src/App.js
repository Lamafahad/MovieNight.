import React, { Component } from 'react';
import './App.css';
import FilmListing from './FilmListing.js';
import Fave from './Fave.js';
import MovieData from './MovieData.js';
import Home from './Home.js';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, NavLink,} from 'react-bootstrap';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Top from './Top.js';
import SubmitForm from './SubmitForm.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: MovieData.films,
      faves: [],
      current: {},
    };


    this.handleFaveToggle = this.handleFaveToggle.bind(this);
  }

  handleFaveToggle = (film) => {
    const faves = this.state.faves.slice();
    const filmIndex = faves.indexOf(film)
    console.log(filmIndex)
    if (filmIndex >= 0) {
      faves.splice(filmIndex, 1)
      console.log("Removing " + film.title + " from faves...")
    }
    else {
      faves.push(film);
      console.log("Adding " + film.title + " to faves... ")
    }
    this.setState({ faves });
  }
  
  handleDetailsClick = (film) => {
    console.log("Fetching details for " + film.title);
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${MovieData.api_key}&append_to_response=videos,images&language=en`

    axios({
      method: 'GET',
      url: url
    }).then(response => {
      console.log(response) // take a look at what you get back!
      console.log(`Fetching details for ${film.title}`);
      console.log(response.data)
      this.setState({ current: response.data })
    })
  }

  render() {
    return (
<Router>
        
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">MovieNight</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/"> Home</Nav.Link>
      <Nav.Link href="FilmListing">Movies</Nav.Link>
      <Nav.Link href="Top">Top Movies</Nav.Link>
    </Nav>
    
  </Navbar>
        <div>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/FilmListing' component={()=> <FilmListing handleDetailsClick={this.handleDetailsClick} faves={this.state.faves} films={MovieData.films} onFaveToggle={this.handleFaveToggle}/> } />
        <Route exact path='/Top' component={Top} />
        </Switch>
        </div>
        </Router>
          );
    }
  }


export default App;