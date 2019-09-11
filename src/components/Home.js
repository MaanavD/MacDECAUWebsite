import React from 'react';
import Video from './Video';
function Home() {
  return (
    <div className="Home">
      <Video />
      <div id="hero" class="hero-text hide">
        <h1>Welcome to...</h1>
        <p>Mac DECA U</p>
      </div>
    </div>
  );
}
//TODO: Lazyloading
//TODO: Linting errors
//TODO: loading screen between pages
export default Home;