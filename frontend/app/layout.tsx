"use client";

import { Toaster } from "@/components/ui/toaster";
import Provider from "./Provider";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#FAFCFE]">
        <Provider>{children}</Provider>
        <Toaster />
      </body>
    </html>
  );
}
