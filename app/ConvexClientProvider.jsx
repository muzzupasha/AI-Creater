"use client";
import { ConvexReactClient } from "convex/react";
import { useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";

// Initialize Convex client with environment variable
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

// Convex Client Provider Component
export function ConvexClientProvider({ children }) {
  return (
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      {children}
    </ConvexProviderWithClerk>
  );
}