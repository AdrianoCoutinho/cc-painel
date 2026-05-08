import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { login } from "../../api";
import { useAppDispatch } from "../../store/hooks";
import { setMessage } from "../../store/modules/SnackBarsSlice";
import { SnackBars } from "../components";

interface IAuthContextData {
  isAuthenticated: boolean;
  logout: () => void;
  login: (email: string, password: string) => Promise<string | void>;
}

const AuthContext = createContext({} as IAuthContextData);

const LOCAL_STORAGE_KEY__ACCESS_TOKEN = "APP_ACCESS_TOKEN";

interface IAuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const [accessToken, setAccessToken] = useState<string>();

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY__ACCESS_TOKEN);
    setAccessToken(stored ?? undefined);
  }, []);

  const handleLogin = useCallback(
    async (email: string, password: string) => {
      const result = await login(email, password);
      if (!result.ok) {
        dispatch(
          setMessage({ message: "Email ou senha incorretos!", status: "error" })
        );
        return;
      }
      localStorage.setItem(LOCAL_STORAGE_KEY__ACCESS_TOKEN, result.token);
      setAccessToken(result.token);
    },
    [dispatch]
  );

  const handleLogout = useCallback(() => {
    localStorage.removeItem(LOCAL_STORAGE_KEY__ACCESS_TOKEN);
    setAccessToken(undefined);
  }, []);

  const isAuthenticated = useMemo(() => !!accessToken, [accessToken]);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login: handleLogin, logout: handleLogout }}
    >
      {children}
      <SnackBars />
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => useContext(AuthContext);
