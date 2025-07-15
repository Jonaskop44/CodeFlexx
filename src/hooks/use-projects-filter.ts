import { GitHubRepository } from "@/types/github";

const isWebDevelopment = (project: GitHubRepository) =>
  project.topics.some((topic) => ["frontend"].includes(topic.toLowerCase()));

const isDesktopApp = (project: GitHubRepository) =>
  project.topics.some((topic) =>
    ["desktop-application"].includes(topic.toLowerCase())
  );

const isBackend = (project: GitHubRepository) =>
  project.topics.some((topic) => ["backend"].includes(topic.toLowerCase()));

const isBot = (project: GitHubRepository) =>
  project.topics.some((topic) => ["bot"].includes(topic.toLowerCase()));

export function filterProjects(
  projects: GitHubRepository[],
  activeTab: string
): GitHubRepository[] {
  switch (activeTab) {
    case "Web Development":
      return projects.filter(isWebDevelopment);

    case "Desktop Applications":
      return projects.filter(isDesktopApp);

    case "Backend":
      return projects.filter(isBackend);

    case "Bots":
      return projects.filter(isBot);

    case "Other":
      return projects.filter(
        (project) =>
          !isWebDevelopment(project) &&
          !isDesktopApp(project) &&
          !isBackend(project) &&
          !isBot(project)
      );

    default:
      return projects;
  }
}
