import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  
});

export const metadata = {
  title: "Quisine - Your AI Recipe Companion",
  description: "Discover delicious recipes tailored to your ingredients and preferences with Quisine, your AI-powered cooking assistant.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{baseTheme: neobrutalism}}>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}`}
      >
      <Header/>
      <main className="min-h-screen">{children}</main>
      <Toaster richColors/>
        <footer>
          {/* If u wanna create a footer, add it here */}
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
