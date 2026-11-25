import { Archivo, Arimo, Encode_Sans_Expanded } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import Footer from "@/components/Footer";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

const arimo = Arimo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arimo",
  display: "swap",
});

const encodeSansExpanded = Encode_Sans_Expanded({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-encoded",
  display: "swap",
});

export const metadata = {
  title: "COMSYS | ALWAYS AHEAD IN TECHNOLOGY",
  description:
    "Join the International Conference on Frontiers in Computing and Systems (COMSYS) India. Organized by COMSYS Educational Trust, the conference explores AI, Machine Learning, Data Science, IoT, Cloud Computing, and more. It brings together researchers, industry experts, and academicians to exchange ideas and advance cutting-edge technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} ${arimo.variable} ${encodeSansExpanded.variable} antialiased`}
      >
        <Navbar />
        <div className="bg-[#011523] flex flex-row" />
        <HeroBanner />
        {children}
        <Footer />
      </body>
    </html>
  );
}
