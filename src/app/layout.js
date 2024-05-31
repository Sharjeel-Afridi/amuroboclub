import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AMURoboclub",
  description: "Robotics club of Aligarh Muslim University",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <nav className="flex justify-between items-center pr-4">
              <Image 
                  src={Logo} 
                  alt="amuroboclub logo" 
                  height={60}
                  className="p-4"
              />
              <div className="flex gap-5 text-sm">
                  <Link href={'/'}>Home</Link>
                  <Link href={'/notices'}>Notices</Link>
                  <Link href={'/projects'}>Projects</Link>
                  <Link href={'/blogs'}>Blogs</Link>
                  <Link href={'/team'}>Team</Link>
                  <Link href={'/contributors'}>Contributors</Link>
                  <Link href={'/amusat'}>AMUSAT</Link>
                  <Link href={'/recruitment'}>Project Recruitment</Link>
                  <Link href={'/newsletter'}>Newsletter</Link>
                  <Link href={'/contactus'}>Contact Us</Link>
              </div>
          </nav>
          <div>{children}</div>
      </body>
    </html>
  );
}