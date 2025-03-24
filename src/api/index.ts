import { Github } from "./github";

class ApiClient {
  github: Github;
  constructor() {
    this.github = new Github();
  }
}

export default ApiClient;
