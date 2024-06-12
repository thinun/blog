import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar/navbar";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Blog",
    description: "Created By Thinun Tharushika",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
            <Navbar/>
            {children}
        </body>
        </html>
    );
}
