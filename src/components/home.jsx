import React from 'react';
import './sass/home.sass';

const Home = () => {
  return (
    <div id="home">
      <div className='line'>
        <div className='vbox'>
          <img className='cornimg' src="/img/bl1.jpg" alt="corn" />
        </div>
        <div className='vbox'>
          <img className='cornimg' src="/img/bl2.jpg" alt="corn" />
        </div>
        <div className='vbox'>
          <img className='cornimg' src="/img/yel1.jpg" alt="corn" />
        </div>
        <div className='vbox'>
          <img className='cornimg' src="/img/yel2.jpg" alt="corn" />
        </div>
      </div>
    </div>
  );
};

export default Home;
