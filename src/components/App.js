import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { StoreProvider } from "../contexts/Store";

import { DefaultLayout } from "./DefaultLayout";

const queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } });

export function App({ children })
{
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <DefaultLayout>
          {children}
        </DefaultLayout>
      </StoreProvider>
    </QueryClientProvider>
  )
}