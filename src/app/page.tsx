"use client";

import Hero from "@/components/Sections/Hero/Hero";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      {/* <AboutSection user={user} />
      <SkillsSection />
      <ProjectsSection projects={projects} isLoading={isLoading} /> */}
    </div>
  );
};

export default Home;
