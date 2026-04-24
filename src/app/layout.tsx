import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Cursor } from "@/components/Cursor";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DMS | Africa's Elite Gaming Force",
  description: "Official personal brand website of DMS - Professional Gamer, Creator, and Champion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${jakarta.variable} font-sans antialiased h-full scroll-smooth custom-cursor-none`}>
      <body className="min-h-full bg-background text-foreground selection:bg-primary/20 selection:text-primary transition-colors duration-300 scanlines overflow-x-hidden">
        {/* Cockpit HUD Brackets */}
        <div className="cockpit-bracket bracket-tl"></div>
        <div className="cockpit-bracket bracket-tr"></div>
        <div className="cockpit-bracket bracket-bl"></div>
        <div className="cockpit-bracket bracket-br"></div>
        
        <Cursor />

        {/* Persistent Nebula Orbs */}
        <div className="nebula-orb w-[600px] h-[600px] bg-primary/20 top-[10%] left-[-10%] fixed -z-10"></div>
        <div className="nebula-orb w-[500px] h-[500px] bg-accent/15 bottom-[20%] right-[-8%] fixed -z-10" style={{animationDelay:'4s'}}></div>
        <div className="nebula-orb w-[400px] h-[400px] bg-primary/10 top-[60%] left-[40%] fixed -z-10" style={{animationDelay:'2s'}}></div>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
        >
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
