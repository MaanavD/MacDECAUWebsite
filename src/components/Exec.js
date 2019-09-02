import React from 'react';
import Card from './Card';
import exec from './ExecArray';
function Exec() {
  return (
    <div className="Exec">
      <h1 className='text-primary text-center exec-title'>Meet our Executive</h1>
      <div className="container exec-container">
        <div className="card-deck">
          {exec.map(person => {
              return (
                <Card image={person.image} name={person.name} position={person.position} description={person.description} email={person.email} facebook={person.facebook} />
              )
          })}
        </div>
      </div>
    </div>
  );
}

export default Exec;
