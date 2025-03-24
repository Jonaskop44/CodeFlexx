"use client";

import { FC, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import WaveAnimation from "@/components/Common/WaveAnimation";
import CustomTabs from "@/components/UI/CustomTabs";
import ProjectCard from "@/components/UI/ProjectCard";
import { projectsAnimationVariants } from "./animations";
import { filterProjects } from "@/hooks/use-projects-filter";
import { GitHubRepository } from "@/types/github";
import Footer from "@/components/Footer";

interface ProjectsSectionProps {
  projects: GitHubRepository[];
}

const ProjectsSection: FC<ProjectsSectionProps> = ({ projects }) => {
  const [activeTab, setActiveTab] = useState("All Projects");
  const { containerVariants, titleVariants, buttonVariants } =
    projectsAnimationVariants;

  const filteredProjects = filterProjects(projects, activeTab);

  return (
    <div id="projects" className="py-20 bg-black relative overflow-hidden">
      <WaveAnimation />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            variants={titleVariants}
          >
            My <span className="text-purple-500">Projects</span>
          </motion.h2>

          <div>
            {/* Custom Tabs */}
            <CustomTabs
              tabs={[
                "All Projects",
                "Web Development",
                "Mobile Apps",
                "Backend",
                "Other",
              ]}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            {/* Projects Grid */}
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))
              ) : (
                <motion.div
                  className="col-span-3 text-center text-gray-400 py-12"
                  variants={titleVariants}
                >
                  No projects found in this category
                </motion.div>
              )}
            </motion.div>

            <div className="text-center mt-12">
              <motion.a
                href="https://github.com/Jonaskop44"
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full font-medium"
              >
                <Icon icon="mdi:github" className="w-5 h-5" />
                View All Projects
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectsSection;
