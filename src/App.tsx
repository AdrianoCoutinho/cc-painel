import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Login } from "./pages";
import { AppRoutes } from "./routes";
import { Menu } from "./shared/components";
import { AppThemeProvider } from "./shared/contexts";
import { AuthProvider } from "./shared/contexts/AuthContext";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <AppThemeProvider>
          <Login>
            <BrowserRouter>
              <Menu>
                <AppRoutes />
              </Menu>
            </BrowserRouter>
          </Login>
        </AppThemeProvider>
      </AuthProvider>
    </Provider>
  );
}

export default App;
