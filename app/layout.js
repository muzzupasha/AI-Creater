import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";
import Header from "@/components/header";
import { Toaster } from "sonner";

// Initialize Inter font
const inter = Inter({ subsets: ["latin"] });

// Metadata for the application
export const metadata = {
 title: "AI Content Platform",
  description: "A platform for AI-generated content",
};

// Root Layout Component
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} `}
      >
        {/* Theme and Providers */}
         <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
          {/* Clerk Provider for authentication */}
          <ClerkProvider appearance={{
            baseTheme: shadesOfPurple,
          }}>
            <ConvexClientProvider>
              {/* header */}
            <Header/>
            <main className="bg-slate-900 min-h-screen text-white overflow-x-hidden">
              {children}
            </main> 
            {/* Toaster for notifications */}
            <Toaster richColors/>
           </ConvexClientProvider>
           </ClerkProvider>
          </ThemeProvider>
      </body>
    </html>
  );
}
