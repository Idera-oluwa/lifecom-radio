import { Inter } from "next/font/google";
import "./globals.css";
import {AppProvider} from '@/context/context'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lifecom radio",
  description: "Your uk christian radio station with a difference",
};

export default function RootLayout({ children }) {
return(
    <html lang="en">
      <body className={`${inter.className} bg-[#0C1821]`} ><AppProvider>{children}</AppProvider></body>
    </html>
  );
}
