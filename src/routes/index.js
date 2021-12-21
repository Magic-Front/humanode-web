import Login from "pages/login";
import homeRoutes from "routes/pages/homeRoutes";

const routes = [
  // page for guest
  {
    path: `/`,
    exact: true,
    auth: false,
    component: Login,
  },
  // Home routes
  ...homeRoutes,
];

export default routes;
