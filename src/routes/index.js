import { createBrowserRouter } from "react-router-dom";

// Import pages
import Home from "../pages/Home";
import CharacterDetails from "../pages/CharacterDetails";

// Create routes
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/characterDetails/:id",
    element: <CharacterDetails />,
  },
]);

export default routes;
