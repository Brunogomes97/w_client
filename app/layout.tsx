import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import { Suspense } from "react";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";


export const metadata: Metadata = {
  title: "Desafio Warlocks",
  description: "Desafio tecnico NextJS",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const mainClassName = cn(roboto.className);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={<div>Loading...</div>}>
            <main className={mainClassName}>{children}</main>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
