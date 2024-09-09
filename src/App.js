import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// Import router
import routes from "./routes";

// Import store and persistor
import { store, persistor } from "./store";

// Import theme
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";

// Import utils
import toastConfig from "./utils/toastConfig";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={routes} />
          <GlobalStyle />
          <ToastContainer {...toastConfig} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
