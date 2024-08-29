"use client";
import { type AuthProviderInfo } from "pocketbase";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import pb from "@/lib/api";
import { useAuth } from "@/lib/hooks/use-auth";
import { GoogleIcon } from "@/assets/icons/google";

export default function AuthSignIn() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { googleSignIn, setUserData, signOut, user, appleSignIn } = useAuth();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const storeUserAndRedirect = (user: any) => {
    setUserData(user);
  };

  useEffect(() => {
    const localAuthProvider: AuthProviderInfo = JSON.parse(
      localStorage.getItem("provider") as string
    );
    const params = new URL(location.href).searchParams;
    const redirectUrl = `${location.origin}/auth/callback`;
    const code = searchParams.get("code");

    if (
      !localAuthProvider ||
      !code ||
      localAuthProvider.state !== params.get("state")
    )
      return;

    pb.collection("users")
      .authWithOAuth2Code(
        localAuthProvider.name,
        code || "{}",
        localAuthProvider.codeVerifier,
        `${redirectUrl}/${localAuthProvider.name}`
      )
      .then((response: any) => {
        setIsAuthenticated(true);
        storeUserAndRedirect({
          name: response.meta.name,
          avatarUrl: response.meta?.avatarUrl,
          email: response.meta?.email,
          username: response.meta?.username,
          id: response.meta?.id,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section className="flex flex-col">
      <aside className="flex flex-1 justify-center items-center px-4">
        <div className="mx-auto w-full flex-col justify-center  space-y-6 sm:w-[350px]">
          {!isAuthenticated ? (
            <>
              <div className="text-left flex flex-col gap-8">
                <h1 className="text-4xl font-bold tracking-tight">Bem vindo</h1>
                <h1 className="text-m font-bold tracking-tight">
                  Faça o login
                </h1>
              </div>
              <div className="grid gap-3 mt-4">
                <button
                  className=" flex flex-row items-center justify-center rounded-xl bg-[#000] px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-[#000]/90 active:bg-[#000]/80"
                  onClick={googleSignIn}
                >
                  <GoogleIcon className="mr-2" />
                  Sign in with Google
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-1 flex-col items-center justify-center space-y-4">
              <img
                src={user!.avatarUrl}
                width={200}
                height={200}
                referrerPolicy="no-referrer"
                className="rounded-full"
              />
              <p>{user?.name}</p>
              <p>{user?.email}</p>
              <button
                onClick={() => {
                  setIsAuthenticated(false);
                  replace(`/auth/callback/google`);
                  signOut();
                }}
                className=" flex flex-row items-center justify-center rounded-xl bg-[#000] px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-[#000]/90 active:bg-[#000]/80"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </aside>
    </section>
  );
}
