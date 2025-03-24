"use client";

import About from "@/components/Sections/About/About";
import Hero from "@/components/Sections/Hero/Hero";
import Projects from "@/components/Sections/Projects/Projects";
import Skills from "@/components/Sections/Skills/Skills";
import { githubStore } from "@/data/githubStore";

const Home = () => {
  const { githubRepositories, githubUser } = githubStore();

  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <About user={githubUser} />
      <Skills />
      <Projects projects={githubRepositories} />
    </div>
  );
};

export default Home;
