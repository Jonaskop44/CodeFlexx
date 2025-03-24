import { motion } from "framer-motion";
import { Card, CardBody, CardFooter, Button, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { GitHubRepository } from "@/types/github";
import { FC } from "react";

interface ProjectCardProps {
  project: GitHubRepository;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
    >
      <Card className="bg-white/5 backdrop-blur-sm border-none h-full overflow-hidden group rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:via-purple-500/5 group-hover:to-blue-500/10 transition-all duration-700"></div>
        <CardBody className="p-4">
          <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
          <p className="text-gray-400 text-sm mb-4">
            {project.description || "No description available"}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.topics &&
              project.topics.map((topic, i) => (
                <Chip
                  key={i}
                  size="sm"
                  color="primary"
                  variant="flat"
                  className="transition-transform hover:scale-105"
                >
                  {topic}
                </Chip>
              ))}
            {project.language && (
              <Chip
                size="sm"
                color="secondary"
                variant="flat"
                className="transition-transform hover:scale-105"
              >
                {project.language}
              </Chip>
            )}
          </div>
        </CardBody>
        <CardFooter className="p-4 pt-0 flex justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400 flex items-center">
              <Icon icon="mdi:star" className="inline mr-1" />{" "}
              {project.stargazers_count}
            </span>
            <span className="text-xs text-gray-400 flex items-center">
              <Icon icon="mdi:source-fork" className="inline mr-1" />{" "}
              {project.forks_count}
            </span>
          </div>
          <Button
            as="a"
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            color="primary"
            variant="flat"
            endContent={<Icon icon="mdi:open-in-new" />}
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white transition-transform hover:scale-105 p-2 rounded-2xl"
          >
            View Project
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
