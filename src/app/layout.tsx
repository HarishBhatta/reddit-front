"use client";
// import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import {
  cacheExchange,
  createClient,
  fetchExchange,
  Provider as UrqlPropvider,
} from "urql";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };
const client = createClient({
  url: "http://localhost:4000/graphql",
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: {
    credentials: "include",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UrqlPropvider value={client}>
          <Provider>{children}</Provider>
        </UrqlPropvider>
      </body>
    </html>
  );
}
