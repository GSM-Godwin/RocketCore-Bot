import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rocket Core Bot",
  description: "Rocket Core is an advanced trading and sniping bot designed to streamline token trading across Core blockchain network",
  icons: {
    icon: '/assets/icon.svg'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
