// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState } from "react";
import { SessionProvider, useSession } from "next-auth/react";
import { Provider, useDispatch } from "react-redux";
import store from "../lib/store";
import { setToken } from "../lib/slices/auth";

function GetThatToken({ children }) {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  useEffect(() => {
    if (session.user) {
      dispatch(setToken({ token: session.user.token, expires: null }));
    }
  }, [session, dispatch, setToken]);
  return { children };
}

export function Providers({ children }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <SessionProvider>
          <Provider store={store}>
            {/* <GetThatToken> */}
              {children}
            {/* </GetThatToken> */}
          </Provider>
        </SessionProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
