import http from "./httpService";

//! get owner projects from server
export function getOwnerProjects() {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
}
//! delete a project from server
export function removeProject(id) {
  return http.delete(`/project/${id}`).then(({ data }) => data.data);
}
