import { setupInterceptors } from "@/lib/apiClient";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, _setUser] = useState(
    JSON.parse(localStorage.getItem("USER_DATA")) ?? {}
  );
  const [token, _setToken] = useState(
    localStorage.getItem("ACCESS_TOKEN") ?? null
  );

  const setToken = (token) => {
    _setToken(token);
    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
    }
  };

  const setUser = (data) => {
    _setUser(data);
    if (data) {
      localStorage.setItem("USER_DATA", JSON.stringify(data));
    } else {
      localStorage.removeItem("USER_DATA");
    }
  };

  const logout = () => {
    _setUser({});
    setToken(null);
    localStorage.removeItem("ACCESS_TOKEN");
    window.location.href = "/";
  };

  useEffect(() => {
    setupInterceptors(token, setToken);
  }, [token]); // Reinitialize interceptors if either changes

  return (
    <>
      <AuthContext.Provider
        value={{
          token,
          setToken,
          logout,
          user,
          setUser,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuth = () => useContext(AuthContext);
