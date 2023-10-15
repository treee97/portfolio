import "./globals.css";
import type { Metadata } from "next";
import dogicaPixelFont from "next/font/local";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import { Providers } from "./components/Providers";
import NavbarUI from "./components/NavbarUI";
import ThemeButton from "./components/ThemeButton";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tree's Portfolio",
  description: "Portfolio where I showcase my projects and tell about myself ",
};
const dogica = dogicaPixelFont({ src: "./fonts/dogicapixel.otf" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} ${dogica.className}  text-text relative `}
      >
        <Providers>
          {/* <Navbar /> */}
          <NavbarUI />
          <main
            className="
       relative"
          >
            {children}
            <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8">
              <ThemeButton />
            </div>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
