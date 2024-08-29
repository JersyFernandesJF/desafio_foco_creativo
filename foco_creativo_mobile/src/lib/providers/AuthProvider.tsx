import React, { createContext, ReactNode, useContext } from "react";
import pb from "@/service/api";
import { User } from "@/data/stores/user/user-data";

export interface AuthProviderProps {
  children?: ReactNode;
}

export interface UserContextState {
  isLoggedIn: boolean;
}

export const UserStateContext = createContext<UserContextState>(
  {} as UserContextState
);

export interface AuthContextModel {
  signUp: (userData: User) => Promise<{ user?: any; error?: any }>;
}
export function useAuth() {
  return useContext(AuthContext);
}
export const AuthContext = createContext<AuthContextModel>(
  {} as AuthContextModel
);

export function AuthProvider({ children }: AuthProviderProps) {
  const signUp = async (userData: User) => {
    if (!pb) return { error: "PocketBase not initialized" };

    const { email, id, picture, name, accessToken } = userData;

    const resp = await pb.collection("user_information").create({
      email,
      picture,
      name,
      accessToken: id,
    });
    return { user: resp };
  };

  const values = {
    signUp,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
