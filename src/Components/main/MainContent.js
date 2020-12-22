import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import ErrorPage from "../../pages/ErrorPage";
import { mainRoutes } from "../../routes/mainRoutes";
import Loader from "../Loader/Loader";

const MainContent = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        {mainRoutes.map((route) => (
          <Route
            exact={route.exact}
            path={route.path}
            component={route.component}
            key={route.path}
          />
        ))}
        <Route render={() => <ErrorPage text="404: Something went wrong"/>} />
      </Switch>
    </Suspense>
  );
};

export default MainContent;
