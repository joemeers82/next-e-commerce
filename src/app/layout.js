import "./globals.css";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Fake Store",
  description: "Powered by NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full m-0">
      <body className={`h-full m-0 ${poppins.className}`}>{children}</body>
    </html>
  );
}
