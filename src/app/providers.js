// app/providers.tsx
'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Context } from '../lib/context';
import { useState } from 'react';
import { SessionProvider } from 'next-auth/react';

export function Providers({ children }) {
  const [object, setObject] = useState({})
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <SessionProvider>
          <Context.Provider value={{ object, setObject }}>
            {children}
          </Context.Provider>
        </SessionProvider>
      </NextThemesProvider>
    </NextUIProvider>
  )
}