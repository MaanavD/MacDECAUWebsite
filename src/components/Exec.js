import React from 'react';
import Card from './Card';
import {exec} from './Arrays';
function Exec() {
  return (
    <div className="Exec" align='center'>
      <h1 className='text-primary text-center exec-title'>Meet our Executive</h1>
      <div className="container exec-container">
        <div className="card-deck">
          {exec.map(person => {
              return (
                <Card link1={person.link1 || "Email" } link2={person.link1 || "Message" } link1link={person.link1link} link2link={person.link2link} image={person.image} name={person.name} position={person.position} description={person.description} email={person.email} facebook={person.facebook} />
              )
          })}
        </div>
      </div>
    </div>
  );
}
export default Exec;
