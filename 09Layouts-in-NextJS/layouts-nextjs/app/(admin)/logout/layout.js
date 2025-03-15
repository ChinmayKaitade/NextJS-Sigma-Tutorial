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
  title:
    "Admin Logout of Facebook - Connect with friends and the world around you",
  description:
    "Admin Logout Page of Facebook is a Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, libero qui",
};

export default function AdminLogoutLayout({ children }) {
  return (
    <>
      <span className="text-2xl mr-4 text-yellow-500">Admin Logout Navbar</span>

      {children}
    </>
  );
}
