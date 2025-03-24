export interface GithubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  language: string;
  stargazers_count: number;
  forks_count: number;
}

export interface GithubUser {
  avatar_url: string;
  name: string;
  bio: string;
}

export interface Skill {
  icon: string;
  title: string;
  description: string;
}

export interface SkillItemProps {
  icon: string;
  title: string;
  description: string;
  isLast: boolean;
  index: number;
}
