import React from 'react';
import './sass/home.sass';
const images = ['pop1.jpg'];

const Home = () => {
  return (
    <div id="home">
      <div className='line'>
        {images.map((file) => {
          return (
            <div className='vbox' key={file}>
              <img className='cornimg' src={`/img/${file}`} alt="corn" />
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default Home;
