import { lazy } from "react";

export const mainRoutes = [
  {
    path: "/",
    name: "Home",
    exact: true,
    component: lazy(() =>
      import("../pages/Home" /* webpackChunkName: "Home" */)
    ),
  },
  {
    path: "/about",
    name: "About",
    exact: true,
    component: lazy(() =>
      import("../pages/About" /* webpackChunkName: "About" */)
    ),
  },
  {
    path: "/contacts",
    name: "Contacts",
    exact: true,
    component: lazy(() =>
      import("../pages/Contacts" /* webpackChunkName: "Contacts" */)
    ),
  },
  {
    path: "/movies",
    name: "Movies",
    exact: false,
    component: lazy(() =>
      import("../pages/Movies" /* webpackChunkName: "Movies" */)
    ),
  },
];
