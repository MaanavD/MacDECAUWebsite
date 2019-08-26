import React from 'react';
import Alert from './Alert';

function Resources() {
  // In a real application, this would be from a database
  const alerts = [
      {
        heading: "Case Studies",
        content: "Sample case studies so you can practise for competition",
        link: "",
        linkWords: "Google Drive"
      },{
        heading: "List of Performance Indicators",
        content: "A list of every potential PI you could get",
        link: "",
        linkWords: "Google Drive"
      },{
        heading: "DECA Info",
        content: "",
        link: "",
        linkWords: "Deca"
      },{
        heading: "Getting a rebate from your faculty",
        content: "",
        linkWords: "Google Drive",
        link: ""
      },{
        heading: "Something else, I'm sure",
        content: "",
        link: "",
        linkWords: "DecaU"
      }

    ]
  return (
    <div className="Resources">
      <h1 className="text-primary text-center res-title">Chapter Resources</h1>
      <div className="container">
        {
          alerts.map(alert=>{
            return <Alert heading={alert.heading} content={alert.content} link={alert.link} linkWords={alert.linkWords}/>
          })
        }
      </div>
    </div>
  );
}

export default Resources;
