import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "@/globals.css";

const firaCode = Fira_Code({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Lucas Gean",
  description: "Portfolio de Lucas Gean dos Santos",

};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html className="bg-background flex flex-col items-center" lang="pt">
        <body className={'max-w-[1920px] w-full' + firaCode.className}>{children}</body>
    </html>
  );
}
