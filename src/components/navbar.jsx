import React from 'react';
import cornhub from './img/cornhub.png';
import './sass/navbar.sass';

const Navbar = () => {
  return (
    <ul id="navbar">
      <li id="logo">
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
  );
};

export default Navbar;
