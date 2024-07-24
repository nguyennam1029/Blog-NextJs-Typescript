import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

import Header from "./components/nav/header";

import { cookies } from "next/headers";
import Footer from "./components/footer/Footer";
import AppProvider from "./AppProvider";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get("sessionToken");
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <AppProvider inititalSessionToken={sessionToken?.value}>
            {children}
          </AppProvider>
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
