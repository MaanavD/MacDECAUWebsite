import React from 'react';

function Card() {
  return (
  <div className="card">
          <img className="card-img-top" src="https://via.placeholder.com/150x125" alt="Executive" />
          <div className="card-body">
            <h5 className="card-title">Maanav Dalal</h5>
            <h6>Vp of Training</h6>
            <p className="card-text">I specialize in <strong>B2B</strong>, but I'm sure I can be of help in any marketing category!</p>
            <a href="#" class="card-link">Message</a>
            <a href="#" class="card-link">Do a case with me</a>
          </div>
        </div>
  );
}

export default Card;
