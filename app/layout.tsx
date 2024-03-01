import type { Metadata } from "next";
import "./globals.css";
import StateProvider from "./StateProvider";

export const metadata: Metadata = {
  title: "Graphql Intern Assessment Test",
  description: "Created by Trae Zeeofor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StateProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </StateProvider>
  );
}
