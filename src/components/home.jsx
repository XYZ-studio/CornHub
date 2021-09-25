import React from 'react';
import './sass/home.sass';
// const images = ['pop1.jpg'];
import images from './data/images';

const Home = () => {
  return (
    <div id="home">
      <div className="line">
        {images.map((images) => {
          return (
            <div className="vBox" key={images}>
              <img className="corniImg" src={`/img/${images.img}`} alt="corn" />
              <h5 className="vTitle">
                video title
              </h5>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default Home;
