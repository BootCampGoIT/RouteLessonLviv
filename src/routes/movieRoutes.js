import { lazy } from "react";

export const movieRoutes = [
  {
    path: "/cast",
    name: "Cast",
    exact: true,
    component: lazy(() =>
      import("../Components/movies/Cast" /* webpackChunkName: "Movies/Cast" */)
    ),
  },
  {
    path: "/review",
    name: "Review",
    exact: true,
    component: lazy(() =>
      import(
        "../Components/movies/Review" /* webpackChunkName: "Movies/Review" */
      )
    ),
  },
];
