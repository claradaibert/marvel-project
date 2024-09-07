import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";

// Import router
import routes from "./routes";

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
