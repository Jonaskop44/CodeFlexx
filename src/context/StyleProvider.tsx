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
      </HeroUIProvider>
    </>
  );
};

export default StyleProvider;
