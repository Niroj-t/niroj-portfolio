import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "../Components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Niroj Thapa",
  description:
    "I'm Niroj Thapa, a passionate and dedicated 4th-year Computer Science student at Patan Multiple Campus, Lalitpur.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-small bg-fixed bg-cover bg-center h-screen`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
