"use client";

import About from "@/components/Sections/About/About";
import Hero from "@/components/Sections/Hero/Hero";
import Projects from "@/components/Sections/Projects/Projects";
import Skills from "@/components/Sections/Skills/Skills";
import { githubStore } from "@/data/githubStore";
import { useEffect, useState } from "react";

const Home = () => {
  const {
    githubRepositories,
    githubUser,
    setGithubRepositories,
    setGithubUser,
  } = githubStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setGithubRepositories();
    setGithubUser();

    setIsLoading(false);
  }, [setGithubRepositories, setGithubUser]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      {!isLoading && (
        <>
          <About user={githubUser} />
          <Skills />
          <Projects projects={githubRepositories} isLoading={isLoading} />
        </>
      )}
    </div>
  );
};

export default Home;
