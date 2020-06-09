import React from 'react';
import ReactBootstrapCarousel from "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import Carousel from 'react-bootstrap/Carousel';
import './App.css';
import './index.css';

const Home = (props) => {
    return(
        <div>

        <div
        className="carousel1"
        style={{ width: "900px", height: "5000%", margin: "auto", padding: "50px" }}
      >
       <Carousel>
       <Carousel.Item>
          <img className="m" src="https://pbs.twimg.com/media/EFVCEwcXsAEt8yG?format=png&name=900x900" />
      </Carousel.Item>

      <Carousel.Item>
          <img className="m" src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fshanonlee%2Ffiles%2F2018%2F12%2FBird-Box-1200x725.jpg" />
     </Carousel.Item>

     <Carousel.Item>
          <img className="m" src="https://s1.dmcdn.net/v/Pn-QS1ShG6BQ8XH-9/x1080" />
      </Carousel.Item>

        </Carousel>
      </div>

      <div className="back2">
      <div className="item">

       <img className="iccon" src="https://i.ibb.co/SNtx6yH/gift-Skul-Loi38.png"></img>
      <img className="iccon" src="https://i.ibb.co/KXvpZ70/popcorn-H1-Eb-Ljin8.png"></img>
      <img className="iccon" src="https://i.ibb.co/1dhKvSQ/blog-SJ7z-Uos2-U.png"></img>

<div>
      <span class="caption"> FREE </span>
      <span class="caption">Movies List</span>
      <span class="caption">Favorite List</span>
      </div>
      </div>
      </div>

      <div className="back">
            <h2 className="tex">Check Out Latest Movies Released</h2>
            <h2 className="tex"> And Make Your Own Top Movies List!</h2>
        </div>

      <div className="back4">
        <p className="pfooter"> Made with &hearts; | &copy; Lama </p>
      </div>

      </div>
    );
  }

export default Home;
