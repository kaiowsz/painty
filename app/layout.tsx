import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/providers/convex-client-provider";

const inter = Inter({ subsets: ["latin"] });

import { Toaster } from "sonner";
import { ModalProvider } from "@/providers/ModalProvider";

// WIP: Add favicon

export const metadata: Metadata = {
  title: "Painty",
  description: "Painty is an application to innovate and create astonishing ideas for you and your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ConvexClientProvider>
          <Toaster />
          <ModalProvider />
          {children}
      </ConvexClientProvider>
      </body>
    </html>
  );
}
