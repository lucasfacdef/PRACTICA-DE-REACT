import { useState } from "react";
import type { ReactNode } from "react";
import type { User } from "../types/User";
import { AuthContext } from "./AuthContext";

interface AuthProviderProps {
  children: ReactNode;
}

function getSavedUser(): User | null {
  const savedUser = localStorage.getItem("streamtuc-user");

  if (!savedUser) {
    return null;
  }

  return JSON.parse(savedUser);
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(
    getSavedUser,
  );

  const login = (user: User) => {
    setUser(user);

    localStorage.setItem(
      "streamtuc-user",
      JSON.stringify(user),
    );
  };

  const logout = () => {
    setUser(null);

    localStorage.removeItem("streamtuc-user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}