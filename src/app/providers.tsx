"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { useState } from 'react'
import { Toaster } from 'react-hot-toast';

const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

    const [queryClient] = useState(()=> new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-right" />
        {children}
        <ReactQueryDevtools/>
    </QueryClientProvider>
  )
}

export default Providers