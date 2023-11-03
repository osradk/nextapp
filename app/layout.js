import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

// app/layout.jsx
import { UserProvider } from "@auth0/nextjs-auth0/client";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "bolig siden",
  description: "De beste boligere i danmark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={inter.className}>
          <nav
            className=" flex justify-center item-center py-[30px]  "
            style={{
              justifyContent: "space-around",
              backgroundColor: "#263048",
              color: "white",
            }}
          >
            <Link href="/">Home</Link>
            <Link href="/bolig">Bolig</Link>
            <Link href="/api/auth/login">Login</Link>
            <Link href="/api/auth/logout">Logout</Link>
          </nav>
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
