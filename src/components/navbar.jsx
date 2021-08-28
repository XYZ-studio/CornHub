import React from 'react';
import cornhub from './img/cornhub.png';

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <img src={cornhub} />
          </li>
          <li>
            影片
          </li>
          <li>
            分類
          </li>
          <li>
            照片與動圖
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
