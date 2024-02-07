import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./AuthProvider";

function Provider({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <AuthProvider>{children}</AuthProvider>
    </QueryClientProvider>
  );
}

export default Provider;
