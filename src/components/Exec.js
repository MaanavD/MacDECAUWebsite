import React from 'react';
import Card from './Card';

function Exec() {
  const a = [1, 10, 100, 1000];
  return (
    <div className="Exec">
      <h1 className='text-primary text-center'>Meet our Executive</h1>
      <div className="container exec-container">
        <div className="card-deck">
          {a.map(i => {
            return <Card />
          })}
        </div>
      </div>
    </div>
  );
}

export default Exec;
