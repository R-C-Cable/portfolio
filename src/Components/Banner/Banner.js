import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron, Container} from "react-bootstrap";
import background from "./BannerImage.jpg"
import "./Banner.css"


function Banner() {

  const bannerStyle = {
    backgroundImage:
    `linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%),
    url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    textAlign: 'center',
    height: '65vh'
  }

  return (
    <Jumbotron id="banner" fluid className="mb-0 mt-5 text-light" style={bannerStyle}>
      <Container>
      <div style={{position: 'relative', top: '%50'}}>
        <h1 >Robert Cable</h1>
        <h5>Web Development Intern</h5>
        <h5>& Computer Science Student</h5>
        <hr className="my-4"></hr>
        </div>
      </Container>
    </Jumbotron>
  );
}

export default Banner;