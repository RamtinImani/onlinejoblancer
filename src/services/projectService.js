import http from "./httpService";

//! get owner projects from server
export function getOwnerProjects() {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
}
//! delete a project from server
export function removeProject(id) {
  return http.delete(`/project/${id}`).then(({ data }) => data.data);
}
//! create new project and post it to the server
export function createNewProject(data) {
  return http.post("/project/add", data).then(({ data }) => data.data);
}
//! update project data
export function updateProject({ id, newProject }) {
  return http.patch(`/project/update/${id}`, newProject).then(({ data }) => data.data);
}
