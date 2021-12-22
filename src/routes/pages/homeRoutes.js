import Home from "pages/home";

const routes = [
  // Home
  {
    path: `/home`,
    exact: true,
    auth: true,
    component: Home,
  },
];

export default routes;
