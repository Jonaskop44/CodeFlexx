import type { GithubRepo } from "@/types";

const isWebDevelopment = (project: GithubRepo) =>
  project.topics.some((topic) =>
    ["nextjs", "tailwindcss", "nextui", "react"].includes(topic.toLowerCase())
  );

const isMobileApp = (project: GithubRepo) =>
  project.topics.some((topic) =>
    ["mobile", "android", "ios", "react-native", "flutter"].includes(
      topic.toLowerCase()
    )
  );

const isBackend = (project: GithubRepo) =>
  project.topics.some((topic) =>
    ["nestjs", "prisma"].includes(topic.toLowerCase())
  );

export function filterProjects(
  projects: GithubRepo[],
  activeTab: string
): GithubRepo[] {
  switch (activeTab) {
    case "Web Development":
      return projects.filter(isWebDevelopment);

    case "Mobile Apps":
      return projects.filter(isMobileApp);

    case "Backend":
      return projects.filter(isBackend);

    case "Other":
      // Everything that doesn't fit in the other categories
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
