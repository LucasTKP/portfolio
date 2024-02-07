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
    <html className="bg-[#282c33] min-w-[100vw] min-h-[100vh] flex flex-col items-center overflow-x-hidden" lang="pt">
        <body className={'max-w-[1920px] ' + firaCode.className}>{children}</body>
    </html>
  );
}
