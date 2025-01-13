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
  title: "Meriem | Rugzakbegeleiding - PGB-begeleiding - Remedial Teaching - regio Amsterdam, Weesp en Muiden",
  description: "Rugzakbegeleiding - PGB-begeleiding - Remedial Teaching regio Amsterdam, Weesp en Muiden",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <div
                    className="grid grid-rows-[63px_1fr_190px] items-center justify-items-center min-h-screen overflow-hidden p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                    <Header />
                    <TransitionProvider containerClassName="h-full">
                        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-[773px] text-sm leading-loose">
                            <Hero isVisible={true} />
                            {children}
                        </main>
                    </TransitionProvider>
                    <Footer/>
                </div>
            </body>
        </html>
    );
}
