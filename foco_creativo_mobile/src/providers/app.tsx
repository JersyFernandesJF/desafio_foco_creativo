import { AuthProvider } from "@/lib/providers/AuthProvider";

import { ReactNode } from "react";

type AppProviderProps = {
  children: ReactNode;
};

export const AppWrapper = ({ children }: AppProviderProps) => (
  <>
    <AuthProvider>{children}</AuthProvider>
  </>
);
