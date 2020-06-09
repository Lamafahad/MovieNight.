import React, { Component } from 'react'
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap-buttons';


class Fave extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // isFave: false,
        };
    }

    handleClick = (e) => {
        e.stopPropagation();
        this.props.onFaveToggle()
    };


    render() {

        const isFave = (this.props.isFave) ? 'unlike' : 'like'
        console.log("isFave", isFave, this.props.isFave)
        return (
            <div className={"film-row-fave " + isFave} onClick={this.handleClick}>
                
            <div className={(this.props.isFave) ? "unlike" : "like"}>
           <svg class="bi bi-heart-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
           <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
           </svg>
        </div>


            </div>
            
        );
    }
}

export default Fave;