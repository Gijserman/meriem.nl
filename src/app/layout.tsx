import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import {Metadata} from "next";
import {TransitionProvider} from "@/app/_components/transition-provider";
import Hero from "@/app/_components/Hero";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meriem | Rugzakbegeleiding regio Amsterdam, Weesp en Muiden",
  description: "Rugzakbegeleiding - PGB-begeleiding - Remedial Teaching regio Amsterdam, Weesp en Muiden",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <link rel="preload" href={`/_next/image?url=%2Fvideo%2F%402x.mp4.jpg&w=640&q=75`} as="image"/>
            <link rel="preload" href={`/_next/image?url=%2Fvideo%2Fwie-ben-ik%402x.mp4.jpg&w=640&q=75`} as="image"/>
            <link rel="preload" href={`/_next/image?url=%2Fvideo%2Frean%402x.mp4.jpg&w=640&q=75`} as="image"/>
            <link rel="preload" href={`/_next/image?url=%2Fvideo%2Fsven%402x.mp4.jpg&w=640&q=75`} as="image"/>
            <link rel="preload" href={`/_next/image?url=%2Fvideo%2Fcontact%402x.mp4.jpg&w=640&q=75`} as="image"/>
        </head>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased text-foreground`}
            >
                <div
                    className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen gap-8 sm:gap-16 font-[family-name:var(--font-geist-sans)]">
                    <Header />
                    <div className="w-full overflow-hidden flex justify-center items-center">
                        <TransitionProvider containerClassName="h-full">
                            <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-[773px] text-xl sm:text-sm leading-loose">
                                <Hero isVisible={true} />
                                <div className="p-8 sm:p-4">{children}</div>
                            </main>
                        </TransitionProvider>
                    </div>
                    <Footer/>
                </div>
            </body>
        </html>
    );
}
