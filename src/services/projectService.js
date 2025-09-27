import http from "./httpService";

//! get owner projects from server
export function getOwnerProjects() {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
}
