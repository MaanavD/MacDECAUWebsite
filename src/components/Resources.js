import React from 'react';
import Alert from './Alert';
import {resources} from './Arrays';
function Resources() {
  // In a real application, this would be from a database
  return (
    <div className="Resources">
      <h1 className="text-primary text-center res-title">Chapter Resources</h1>
      <div className="container">
        {
          resources.map(alert=>{
            return <Alert heading={alert.heading} content={alert.content} link={alert.link} linkWords={alert.linkWords}/>
          })
        }
      </div>
    </div>
  );
}

export default Resources;
