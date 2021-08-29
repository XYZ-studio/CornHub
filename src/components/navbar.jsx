import React, {useState} from 'react';
import cornhub from './img/cornhub.png';
import {Link} from 'react-router-dom';
import './sass/navbar.sass';

const Navbar = () => {
  const [check, setCheck]= useState(false);
  const checkFun = () => {
    console.log(check);
    setCheck(!check);
    document.getElementById('check').checked = check;
  };

  return (
    <ul id="navbar" style={{height: check ? '100px' : ''}}>
      <li id="logo">
        <Link to="/">
          <img src={cornhub} />
        </Link>
      </li>
      <li id="navbar-button">
        <input id="check" type="checkbox" onClick={checkFun}/>
        <div></div>
      </li>
      <li className="text">
        <Link to="/video">影片</Link>
      </li>
      <li className="text">
        <Link to="/classes">分類</Link>
      </li>
      <li className="text">
        <Link to="/picture">照片與動圖</Link>
      </li>
    </ul>
  );
};

export default Navbar;
