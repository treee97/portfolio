import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import { Providers } from "./components/Providers";
import NavbarUI from "./components/NavbarUI";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tree's Portfolio",
  description: "Portfolio where I showcase my projects and tell about myself ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} text-text relative `}>
        <Providers>
          {/* <Navbar /> */}
          <NavbarUI />
          <main
            className="
       relative"
          >
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
