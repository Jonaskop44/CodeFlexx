import axios from "axios";

export class Helper {
  constructor() {}

  async getAllRepositories() {
    return axios
      .get("https://api.github.com/users/Jonaskop44/repos")
      .then((response) => {
        if (response.status !== 200) return { data: null, status: false };

        const data = response.data;
        return { data, status: true };
      })
      .catch(() => {
        return { data: null, status: false };
      });
  }

  async getUser() {
    return axios
      .get("https://api.github.com/users/Jonaskop44")
      .then((response) => {
        if (response.status !== 200) return { data: null, status: false };

        const data = response.data;
        return { data, status: true };
      })
      .catch(() => {
        return { data: null, status: false };
      });
  }
}
