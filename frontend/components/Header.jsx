import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { Cookie, Refrigerator, Sparkles } from "lucide-react";
import UserDropdown from "./UserDropdown";
import { checkUser } from "@/lib/checkUser";
import PricingModal from "./PricingModal";
import { Badge } from "./ui/badge";
import HowToCookModal from "./HowToCookModal";

const Header = async () => {
  const user = await checkUser();
  return (
    <header className="fixed top-0 w-full border-b border-stone-200 bg-stone-50/80 backdrop-blur-md z-50 supports-backdrop-filter:bg-stone-50/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href={user ? "/dashboard" : "/"}>
          <Image
            src="/logo.png"
            alt="Quisine Logo"
            width={100}
            height={100}
            className="h-14 w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-600">
          <Link
            href="/recipes"
            className="hover:text-[#5F8D75] transition-colors flex gap-1.5 items-center"
          >
            <Cookie className="w-4 h-4" />
            My Recipes
          </Link>
          <Link
            href="/pantry"
            className="hover:text-[#5F8D75] transition-colors flex gap-1.5 items-center"
          >
            <Refrigerator className="w-4 h-4" />
            My Pantry
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <SignedIn>
            {/* How to Cook */}
            <HowToCookModal/>
            {user && (
              <PricingModal subscriptionTier={user.subscriptionTier}>
                <Badge
                  variant="outline"
                  className={`
        flex h-8 px-3 gap-1.5 rounded-full text-sm font-semibold transition-all cursor-pointer border
        ${
          user.subscriptionTier === "pro"
            ? "bg-gradient-to-r from-[#5F8D75] to-[#4C7560] text-white border-transparent shadow-sm hover:shadow-md" // Sage Green Gradient
            : "bg-stone-100 text-stone-600 border-stone-200 hover:bg-stone-200" // Clean Stone for Free Plan
        }
      `}
                >
                  <Sparkles
                    className={`h-3.5 w-3.5 ${
                      user.subscriptionTier === "pro"
                        ? "text-white fill-white/20"
                        : "text-[#5F8D75] fill-transparent" // Sage icon color for Free plan
                    }`}
                  />
                  <span>
                    {user.subscriptionTier === "pro" ? "Pro Chef" : "Free Plan"}
                  </span>
                </Badge>
              </PricingModal>
            )}
            <UserDropdown />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <Button
                variant="ghost"
                className="text-stone-600 hover:text-[#5F8D75] hover:bg-[#5F8D75]/10 font-medium"
              >
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button variant="primary" className="rounded-full px-6">
                Get Started
              </Button>
            </SignUpButton>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
};

export default Header;
