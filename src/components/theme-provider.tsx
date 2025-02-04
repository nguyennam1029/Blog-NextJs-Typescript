"use client"

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps, type } from 'next-themes/dist/types';
import * as React from 'react';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
