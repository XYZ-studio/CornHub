import React, {useState} from 'react';
import cornhub from './img/cornhub.png';
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
        <img src={cornhub} />
      </li>
      <li id="navbar-button">
        <input id="check" type="checkbox" onClick={checkFun}/>
        <div></div>
      </li>
      <li className="text">
        影片
      </li>
      <li className="text">
        分類
      </li>
      <li className="text">
        照片與動圖
      </li>
    </ul>
  );
};

export default Navbar;
