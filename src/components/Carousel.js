import React from 'react';

function Carousel() {
  return (
    <div className="bd-example">
      <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-ride="carousel">
        <ol className="carousel-indicators">
          <li className="about-tabs active" data-target="#carouselExampleCaptions" data-slide-to="0"></li>
          <li className="about-tabs" data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li className="about-tabs" data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://via.placeholder.com/150x86" className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-primary">Chapter Meetings</h5>
                <p className="text-primary">In meetings, we teach you about business cases and competition, with frequent guest speakers and opportunites to network.</p>
              </div>
        </div>
            <div className="carousel-item">
              <img src="https://via.placeholder.com/150x86" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="text-primary">MDCC</h5>
                  <p className="text-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
        </div>
              <div className="carousel-item">
                <img src="https://via.placeholder.com/150x86" className="d-block w-100" alt="..."/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5 className="text-primary">Provincial Competition</h5>
                    <p className="text-primary">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </div>
        </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          );
        }
        
        export default Carousel;
