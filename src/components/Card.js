import React from 'react';

function Card(props) {
  return (
  <div className="card mb-3">
          <img className="card-img-top" src={props.image} alt="Executive" />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <h6>{props.position}</h6>
            <p className="card-text">{props.description}</p>
            <a href={props.email} class="card-link">Email</a>
            <a href={props.facebook} class="card-link">Message</a>
          </div>
        </div>
  );
}

export default Card;
