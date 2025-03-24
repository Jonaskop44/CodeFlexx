import ApiClient from "@/api";
import { GitHubRepository, GitHubUser } from "@/types/github";
import { create } from "zustand";

interface githubStoreState {
  githubUser: GitHubUser;
  githubRepositories: GitHubRepository[];
  setGithubUser: () => void;
  setGithubRepositories: () => void;
}

const apiClient = new ApiClient();

export const githubStore = create<githubStoreState>((set) => ({
  githubUser: {} as GitHubUser,
  githubRepositories: [] as GitHubRepository[],
  setGithubUser: async () => {
    return apiClient.github.helper
      .getUser()
      .then((response) => {
        if (response.status) {
          set({ githubUser: response.data as GitHubUser });
        } else {
          set({ githubUser: {} as GitHubUser });
        }
      })
      .catch(() => {
        set({ githubUser: {} as GitHubUser });
      });
  },
  setGithubRepositories: async () => {
    return apiClient.github.helper
      .getAllRepositories()
      .then((response) => {
        if (response.status) {
          set({ githubRepositories: response.data as GitHubRepository[] });
        } else {
          set({ githubRepositories: [] as GitHubRepository[] });
        }
      })
      .catch(() => {
        set({ githubRepositories: [] as GitHubRepository[] });
      });
  },
}));
