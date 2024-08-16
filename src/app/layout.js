import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "AMURoboclub",
  description: "Robotics club of Aligarh Muslim University",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${inter.className} ${raleway.className} `}>
        <div className="h-screen w-full bg-black bg-dot-white/[0.2]">
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}