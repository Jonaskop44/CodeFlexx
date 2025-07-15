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
import { Card, CardBody, CardFooter, Skeleton } from "@heroui/react";

interface ProjectsSectionProps {
  projects: GitHubRepository[];
  isLoading: boolean;
}

const ProjectsSection: FC<ProjectsSectionProps> = ({ projects, isLoading }) => {
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

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {Array(6)
                .fill(0)
                .map((_, index) => (
                  <Card
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border-none h-full overflow-hidden"
                  >
                    <CardBody className="p-3 sm:p-4">
                      <Skeleton className="rounded-lg">
                        <div className="h-6 w-3/4 rounded-lg bg-default-200"></div>
                      </Skeleton>
                      <Skeleton className="rounded-lg mt-3">
                        <div className="h-4 w-full rounded-lg bg-default-200"></div>
                      </Skeleton>
                      <Skeleton className="rounded-lg mt-2">
                        <div className="h-4 w-4/5 rounded-lg bg-default-200"></div>
                      </Skeleton>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {Array(3)
                          .fill(0)
                          .map((_, i) => (
                            <Skeleton key={i} className="rounded-full">
                              <div className="h-5 w-16 rounded-full bg-default-200"></div>
                            </Skeleton>
                          ))}
                      </div>
                    </CardBody>
                    <CardFooter className="p-3 sm:p-4 pt-0 flex justify-between">
                      <div className="flex items-center gap-3">
                        <Skeleton className="rounded-lg">
                          <div className="h-4 w-12 rounded-lg bg-default-200"></div>
                        </Skeleton>
                      </div>
                      <Skeleton className="rounded-lg">
                        <div className="h-8 w-24 rounded-lg bg-default-200"></div>
                      </Skeleton>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          ) : (
            <div>
              {/* Custom Tabs */}
              <CustomTabs
                tabs={[
                  "All Projects",
                  "Web Development",
                  "Backend",
                  "Desktop Applications",
                  "Bots",
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
          )}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectsSection;
