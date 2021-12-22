import guestRoutes from "routes/pages/guestRoutes";
import homeRoutes from "routes/pages/homeRoutes";

const routes = [
  // page for guest
  ...guestRoutes,
  // Home routes
  ...homeRoutes,
];

export default routes;
