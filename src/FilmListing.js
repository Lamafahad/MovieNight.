import React, { Component } from 'react'
import FilmRow from './FilmRow';
// import FilmPoster from './FilmPoster';
// import FilmPoster from './FilmPoster';
import {
    Card,
    CardDeck,
    CardFooter,
    CardTitle,
    CardText,
    CardGroup,
    Col,
    Row,
    Button
  } from 'react-bootstrap';

class FilmListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: 'all',
        };
    }
    handleFilterClick = (filter) => {
        console.log('Setting filter to ' + filter);
        this.setState({
            filter: filter,
        });
    }

    render() {
        const allFilms = this.props.films.map((film, index) => {
            return (
                <FilmRow isFave={(this.props.faves.includes(film) <= 0) ? false : true} onFaveToggle={() => this.props.onFaveToggle(film)} title={film.title} poster_path={film.poster_path} key={index} year={(new Date(film.release_date)).getFullYear()} />
            )
        })
        const allFaves = this.props.faves.map((film, index) => {
            return (
                <FilmRow isFave={(this.props.faves.includes(film) <= 0) ? false : true} onFaveToggle={() => this.props.onFaveToggle(film)} title={film.title} poster_path={film.poster_path} key={index} year={(new Date(film.release_date)).getFullYear()} />
            )
        })

        return (
            <div>
                <p className="tit">NEW MOVIES</p>
                <div class="text-center mr-1 mb-5 ml-7 pl-5">
           <Button variant="danger" size="lg" active className={"filmAll" + (this.state.filter === "all" ? "is-active" : "")} onClick={() => this.handleFilterClick('all')}> All Movies <span className="allLength"> {this.props.films.length} </span> </Button>
           <Button variant="danger" size="lg" active className={"filmFav " + (this.state.filter === "faves" ? "is-active" : "")} onClick={() => this.handleFilterClick('faves')}> Favourite <span className="favLength">{this.props.faves.length}</span></Button>
                </div>
                <div>
                {(this.state.filter === 'all') ? allFilms : allFaves}
                </div>

            </div>
            
        );
    }
}

export default FilmListing;