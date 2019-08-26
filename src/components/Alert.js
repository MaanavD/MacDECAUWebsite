import React from 'react';

function Alert(props) {
  return (
    <div className="alert alert-primary" role="alert">
    <h4 className="alert-heading">{props.heading}</h4>
    <p>{props.content}</p>
    <hr/>
    <a href={props.link} className="card-link">{props.linkWords}</a>
  </div>
  );
}

export default Alert;
