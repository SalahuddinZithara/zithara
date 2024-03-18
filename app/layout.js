import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Zithara",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <header className=" w-full sticky top-0 left-0 z-50 bg-white">
          <Navbar />
        </header>
        <main className=" w-full min-h-[90vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
