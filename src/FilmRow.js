import React from 'react'
import FilmPoster from './FilmPoster'
import Fave from './Fave'
import {
    Card,
    CardBlock,
    CardFooter,
    CardTitle,
    CardText,
    Container,
    Col,
    Row,
  } from 'react-bootstrap';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap-buttons';

const FilmRow = props => {

    return (
      <div>
        <Container>
        <Row>
          <Col>
        
    <div className="rowlist" onClick={() => props.handleDetailsClick(props.title)}>           
        <div>
        <FilmPoster className="film-poster" poster_path={props.poster_path} />
        </div>
        <div>
        <h1>{props.title}</h1>
        <h4>{props.year}</h4>
        <Fave isFave={props.isFave} onFaveToggle={props.onFaveToggle}/> 
</div>       
</div>

</Col>
</Row>
      </Container>
      </div>

   );
}

export default FilmRow;