// app/providers.tsx
'use client'

import { QueryClient, QueryClientProvider, QueryCache } from 'react-query';

const queryCache = new QueryCache({
  onError: (error) => {
    console.log(error)
  },
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      // cacheTime: 0,
      retry: 2,
    },
  },
  queryCache,
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}