/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Loader from "@/components/Common/Loader";
import Navbar from "@/components/Navbar/Navbar";
import { githubStore } from "@/data/githubStore";
import { HeroUIProvider } from "@heroui/react";
import { FC, useEffect, useState } from "react";

interface StyleProviderProps {
  children: React.ReactNode;
}

const StyleProvider: FC<StyleProviderProps> = ({ children }) => {
  const { setGithubRepositories, setGithubUser } = githubStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setGithubUser();
    setGithubRepositories();
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, []);

  return (
    <>
      <HeroUIProvider>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Navbar />
            {children}
          </>
        )}
      </HeroUIProvider>
    </>
  );
};

export default StyleProvider;
