"use client";
import { SessionProvider } from "next-auth/react";
import { queryClient } from "@/lib/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import UseAuth from "../hooks/use-auth";

export default function ProvidersWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <UseAuth>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </UseAuth>
    </SessionProvider>
  );
}
