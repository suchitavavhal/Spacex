// import React from "react";
import "../App.css";
import logo from "../logo.png";

const Header = () => {
  return (
    <>
      <header className="App-header mt-3 mb-3">
       

        <div className="dropdown">
  <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Past 6 Months
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Past 4 Months</a></li>
    <li><a className="dropdown-item" href="#">Past 2 Months</a></li>
   
  </ul>
</div>
<img src={logo} className="App-logo" alt="logo" />
<div className="dropdown">
  <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    All Launches
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Upcoming Launches</a></li>
    <li><a className="dropdown-item" href="#">Successful Launches</a></li>
    <li><a className="dropdown-item" href="#">Failed Launches</a></li>
  </ul>
</div>
      </header>
    </>
  );
};

export default Header;
