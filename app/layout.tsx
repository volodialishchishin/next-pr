// These styles apply to every route in the application
import "@/styles/globals.css";
import {Metadata} from "next";
import {Inter} from "next/font/google";
import {Toaster} from "react-hot-toast";
import {Suspense} from "react";
import Header from "@/components/header/header";
import { Providers } from "@/lib/providers";
import {SessionProvider} from "next-auth/react";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});




export default async function RootLayout({
                                             children,
                                         }: {
    children: React.ReactNode;
}) {
    return (
            <Providers>
                <html lang="en">
                <body className={inter.variable}>
                <Toaster/>
                <Suspense fallback="Loading...">
                    <Header/>
                </Suspense>
                {children}

                </body>
                </html>
            </Providers>


    );
}
