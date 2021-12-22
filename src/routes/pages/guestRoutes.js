import Home from "pages/home";

const routes = [
  // Home
  {
    path: `/`,
    exact: true,
    auth: false,
    component: Home,
  },
];

export default routes;
