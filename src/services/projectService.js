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
//! toggle project status
export function toggleProjectStatus({ id, data }) {
  return http.patch(`/project/${id}`, data).then(({ data }) => data.data);
}
//! get single project data form server
export function getProject(id) {
  return http.get(`/project/${id}`).then(({ data }) => data.data);
}
//! get all created projects by owners and admin form server
export function getAllProjects(queryString) {
  return http.get(`/project/list${queryString}`).then(({ data }) => data.data);
}
