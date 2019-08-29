import React from 'react';
import execPhoto from './../img/exec.png'
import mdcc from './../img/MDCC.png'
import provs from './../img/provs.png'
function Carousel() {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li className="about-tabs active" data-target="#carouselExampleControls" data-slide-to="0"></li>
        <li className="about-tabs" data-target="#carouselExampleControls" data-slide-to="1"></li>
        <li className="about-tabs" data-target="#carouselExampleControls" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner bg-blur" role="listbox">
        <div className="carousel-item active">
          <div className="carousel-image d-flex align-items-center justify-content-center min-vh-100">
            <img src={execPhoto} className="d-block carousel-image" />
            <div className="carousel-caption">
              <h5 className="text-white">Chapter Meetings</h5>
              <p className="text-white">In meetings, we teach you about business cases and competition, with frequent guest speakers and opportunites to network.</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-image d-flex align-items-center justify-content-center min-vh-100">
            <img src={mdcc} className="d-block w-75 carousel-image" />
            <div className="carousel-caption">
              <h5>MDCC</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-image d-flex align-items-center justify-content-center min-vh-100">
            <img src={provs} className="d-block w-75 carousel-image" />
            <div className="carousel-caption">
              <h5>Provincial Competition</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
