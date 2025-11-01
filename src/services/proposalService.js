import http from "./httpService";

//! change proposal status
export function updateProposalStatus({ proposalId, ...data }) {
  return http.patch(`/proposal/${proposalId}`, data).then(({ data }) => data.data);
}
//! get proposals from server
export function getProposals() {
  return http.get("/proposal/list").then(({ data }) => data.data);
}
//! create new proposal and post it to the server
export function createNewProposal(data) {
  return http.post("/proposal/add", data).then(({ data }) => data.data);
}
