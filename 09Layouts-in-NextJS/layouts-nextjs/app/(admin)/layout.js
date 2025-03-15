import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Admin of Facebook - Connect with friends and the world around you",
  description:
    "Admin Page of Facebook is a Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, libero qui",
};

export default function AdminLayout({ children }) {
  return (
    <>
      <span className="text-2xl text-center p-4">Admin Navbar</span>

      {children}
    </>
  );
}
