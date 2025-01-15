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
                className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-600`}
            >
                <div
                    className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
                    <Header />
                    <div className="w-full overflow-hidden flex justify-center items-center">
                        <TransitionProvider containerClassName="h-full">
                            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-[773px] text-xl sm:text-sm leading-loose">
                                <Hero isVisible={true} />
                                <div className="p-4">{children}</div>
                            </main>
                        </TransitionProvider>
                    </div>
                    <Footer/>
                </div>
            </body>
        </html>
    );
}
