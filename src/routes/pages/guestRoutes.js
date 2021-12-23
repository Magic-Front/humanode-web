import About from "pages/about";
import Home from "pages/home";
import Network from "pages/network";
import Paper from "pages/paper";

const routes = [
  // Home
  {
    path: `/`,
    exact: true,
    auth: false,
    component: Home,
  },
  // Network
  {
    path: `/network`,
    exact: true,
    auth: false,
    component: Network,
  },
  // Paper
  {
    path: `/paper`,
    exact: true,
    auth: false,
    component: Paper,
  },
  // About
  {
    path: `/about`,
    exact: true,
    auth: false,
    component: About,
  },
];

export default routes;
