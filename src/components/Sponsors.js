import React from 'react';
import Card from './Card';
import { premiumSponsors, sponsors } from './Arrays';
function Sponsors() {
  return (
    <div className="Sponsors">
      <h1 className="text-center text-primary">Our Sponsors</h1>
      <div className="container">
        <div className="card-deck spCards">
          {premiumSponsors.map(sponsor => {
            return (
              <Card link1link={sponsor.link1link} link2link={sponsor.link2link} link1={sponsor.link1 || "Website"} link2={sponsor.link2} image={sponsor.image} name={sponsor.name} position={sponsor.position} description={sponsor.description} />
            )
          })}
        </div>
        <div className="card-deck spCards">
          {sponsors.map(sponsor => {
            return (
              <Card link1link={sponsor.link1link} link2link={sponsor.link2link} link1={sponsor.link1 || "Website"} link2={sponsor.link2} image={sponsor.image} name={sponsor.name} position={sponsor.position} description={sponsor.description} />
            )
          })}
        </div>
      </div>
      <div className="navbar bg-info border-top border-primary">
        <p className="form-inline my-2 my-lg-0 ml-auto text-grey" >© 2019, assembled by &nbsp;<a target="_blank" rel="noopener noreferrer" href="https://maanavdalal.com/"> Maanav Dalal</a></p>
      </div>
    </div>
  );
}
export default Sponsors;