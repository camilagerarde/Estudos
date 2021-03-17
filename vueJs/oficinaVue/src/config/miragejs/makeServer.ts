import { Server } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  const server = new Server({
    environment,
    routes() {
      this.urlPrefix = process.env.VUE_APP_APT_URL as string;
      this.namespace = "/api/";
      this.get("/todos", () => {
        return {
          data: [
            {
              description: "first todo",
              criticality: "cool",
              completed: true
            },
            {
              description: "second todo",
              criticality: "medium",
              completed: true
            },
            {
              description: "third todo",
              criticality: "urgent",
              completed: false
            },
            {
              description: "fourth todo",
              criticality: "medium",
              completed: false
            },
            {
              description: "fifth todo",
              criticality: "urgent",
              completed: false
            },
            {
              description: "sixth todo",
              criticality: "cool",
              completed: true
            }
          ]
        };
      });
    }
  });
  return server;
}
