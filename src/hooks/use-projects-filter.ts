import { GitHubRepository } from "@/types/github";

const isWebDevelopment = (project: GitHubRepository) =>
  project.topics.some((topic) =>
    ["nextjs", "tailwindcss", "nextui", "react"].includes(topic.toLowerCase())
  );

const isMobileApp = (project: GitHubRepository) =>
  project.topics.some((topic) =>
    ["mobile", "android", "ios", "react-native", "flutter"].includes(
      topic.toLowerCase()
    )
  );

const isBackend = (project: GitHubRepository) =>
  project.topics.some((topic) =>
    ["nestjs", "prisma"].includes(topic.toLowerCase())
  );

export function filterProjects(
  projects: GitHubRepository[],
  activeTab: string
): GitHubRepository[] {
  switch (activeTab) {
    case "Web Development":
      return projects.filter(isWebDevelopment);

    case "Mobile Apps":
      return projects.filter(isMobileApp);

    case "Backend":
      return projects.filter(isBackend);

    case "Other":
      return projects.filter(
        (project) =>
          !isWebDevelopment(project) &&
          !isMobileApp(project) &&
          !isBackend(project)
      );

    default:
      return projects;
  }
}
