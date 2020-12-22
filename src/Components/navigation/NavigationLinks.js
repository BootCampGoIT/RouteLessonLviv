import React from "react";
import { NavLink } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";

const NavigationLinks = () => {
  return (
    <ul className='list'>
      {mainRoutes.map((route) => (
        <li className='listItem' key={route.path}>
          <NavLink
            exact={route.exact}
            to={route.path}
            className='listItemLink'
            activeClassName='listItemLinkActive'>
            {route.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavigationLinks;
