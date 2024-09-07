import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";

// Import router
import routes from "./routes";

// Import theme
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";

// Import utils
import toastConfig from "./utils/toastConfig";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes} />
      <GlobalStyle />
      <ToastContainer {...toastConfig} />
    </ThemeProvider>
  );
}

export default App;
