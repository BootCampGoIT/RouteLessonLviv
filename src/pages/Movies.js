import React, { Suspense, useEffect } from "react";
import { movieRoutes } from "../routes/movieRoutes";
import { NavLink, Switch, Route } from "react-router-dom";

console.log(React)

const Movies = (props) => {

//   useEffect(() => {
//     props.history.push(`${props.match.url}/cast`);
//   }, []);

  return (
    <>
      <ul className='list'>
        {movieRoutes.map((route) => (
          <li className='listItem' key={route.path}>
            <NavLink
              exact={route.exact}
              to={`${props.match.url}${route.path}`}
              className='listItemLink'
              activeClassName='listItemLinkActive'>
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <Suspense>
        <Switch>
          {movieRoutes.map((route) => (
            <Route
              exact={route.exact}
              path={`${props.match.url}${route.path}`}
              component={route.component}
              key={route.path}
            />
          ))}
         
        </Switch>
      </Suspense>
    </>
  );
};

export default Movies;
