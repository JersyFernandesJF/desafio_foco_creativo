import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import PocketBase, { type AuthProviderInfo } from "pocketbase";

import { User } from "@/models/user.model";

interface AuthContextType {
  user: User | null;
  googleSignIn: () => void;
  appleSignIn: () => void;
  setUserData: (user: any) => void;
  signOut: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

const UseAuth: FC<{ children: ReactNode }> = ({ children }) => {
  const pb = new PocketBase(process.env.NEXT_PUBLIC_API_URL);
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [googleAuthProvider, setGoogleAuthProvider] =
    useState<AuthProviderInfo | null>(null);
  const [appleAuthProvider, setAppleAuthProvider] =
    useState<AuthProviderInfo | null>(null);

  useEffect(() => {
    const initAuth = async () => {
      const authMethods = await pb
        .collection("users")
        .listAuthMethods()
        .then((methods) => methods)
        .catch((err) => {
          console.error(err);
        });

      if (authMethods)
        for (const provider of authMethods.authProviders) {
          if (provider.name === "google") setGoogleAuthProvider(provider);
          if (provider.name === "apple") setAppleAuthProvider(provider);
        }
    };

    initAuth();

    if (pb.authStore.model) setUserData(pb.authStore.model as any);
  }, []);

  const setUserData = (pbUser: any) => {
    const { id, name, email, username, avatarUrl } = pbUser;
    setUser({ id, name, email, username, avatarUrl });
  };

  const googleSignIn = () => {
    signOut();
    localStorage.setItem("provider", JSON.stringify(googleAuthProvider));
    const redirectUrl = `${location.origin}/auth/callback/google`;
    const url = googleAuthProvider?.authUrl + redirectUrl;

    setIsAuthenticated(true);
    router.push(url);
  };

  const appleSignIn = () => {
    signOut();
    localStorage.setItem("provider", JSON.stringify(appleAuthProvider));
    const redirectUrl = `${process.env.NEXT_PUBLIC_API_REDIRECT_APPLE}/apple`;
    const url = appleAuthProvider?.authUrl + redirectUrl;

    setIsAuthenticated(true);
    router.push(url);
  };

  const signOut = () => {
    setUser(null);
    setIsAuthenticated(false);
    pb.authStore.clear();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        googleSignIn,
        appleSignIn,
        setUserData,
        signOut,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext) as AuthContextType;
export default UseAuth;
