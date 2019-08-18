import React from 'react';
import Alert from './Alert';

function Resources() {
  const alerts = [1,2,3,4,5];
  return (
    <div className="Resources">
      <h1 className="text-primary text-center res-title">Chapter Resources</h1>
      <div className="container">
        {
          alerts.map(i=>{
            return <Alert/>
          })
        }
      </div>
    </div>
  );
}

export default Resources;
