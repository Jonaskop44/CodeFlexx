"use client";

import About from "@/components/Sections/About/About";
import Hero from "@/components/Sections/Hero/Hero";
import Projects from "@/components/Sections/Projects/Projects";
import Skills from "@/components/Sections/Skills/Skills";
import { GithubRepo, GithubUser } from "@/types/index";
import { useEffect, useState } from "react";

const Home = () => {
  const [projects, setProjects] = useState<GithubRepo[]>([]);
  const [user, setUser] = useState<GithubUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch repos and user data in parallel
        const [reposResponse, userResponse] = await Promise.all([
          fetch("https://api.github.com/users/Jonaskop44/repos?per_page=100"),
          fetch("https://api.github.com/users/Jonaskop44"),
        ]);

        const reposData = await reposResponse.json();
        const userData = await userResponse.json();

        setProjects(reposData);
        setUser(userData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <About user={user} />
      <Skills />
      <Projects projects={projects} isLoading={isLoading} />
    </div>
  );
};

export default Home;
