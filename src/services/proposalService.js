import http from "./httpService";

//! change proposal status
export function updateProposalStatus({ proposalId, ...data }) {
  return http.patch(`/proposal/${proposalId}`, data).then(({ data }) => data.data);
}
//! get proposals from server
export function getProposals() {
  return http.get("/proposal/list").then(({ data }) => data.data);
}
