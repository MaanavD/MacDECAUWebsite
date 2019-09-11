import React from 'react';
import LazyLoad from 'react-lazy-load';
function Card(props) {
  return (
    <div className="card border-primary mb-3">
      <LazyLoad>
        <img className="border-primary border-bottom alert-primary card-img-top" src={props.image} alt="An Executive"/>
      </LazyLoad>
      <div className="card-body">
        <h5 className="card-title ">{props.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.position}</h6>
        <p className="card-text">{props.description}</p>
        <a href={props.link1link} class="card-link" target="_blank" rel="noopener noreferrer">{props.link1}</a>
        <a href={props.link2link} class="card-link" target="_blank" rel="noopener noreferrer">{props.link2}</a>
      </div>
    </div>
  );
}
export default Card;