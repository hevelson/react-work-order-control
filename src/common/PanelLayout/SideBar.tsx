import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/work-order-logo.png';

const SideBar = (): JSX.Element => {
  return (
    <nav className="side-bar">
      <div className="logo-box">
        <NavLink to="/">
          <img src={logo} alt="Work Order Control" />
        </NavLink>
      </div>
      <ul className="listItem">
        <li className="item">
          <NavLink exact to="/" activeClassName="item-active">
            Dashboard
          </NavLink>
        </li>
        <li className="item">
          <NavLink to="/orders" activeClassName="item-active">
            Orders
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
