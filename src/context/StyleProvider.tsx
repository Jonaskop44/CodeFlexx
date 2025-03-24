"use client";

import Navbar from "@/components/Navbar/Navbar";
import { HeroUIProvider } from "@heroui/react";
import { FC } from "react";

interface StyleProviderProps {
  children: React.ReactNode;
}

const StyleProvider: FC<StyleProviderProps> = ({ children }) => {
  return (
    <>
      <HeroUIProvider>
        <Navbar />
        {children}
        <footer className="py-8 bg-black text-center text-gray-400 text-sm">
          <div className="container mx-auto px-4">
            <p>© {new Date().getFullYear()} Jonas. All rights reserved.</p>
          </div>
        </footer>
      </HeroUIProvider>
    </>
  );
};

export default StyleProvider;
