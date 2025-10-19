import http from "./httpService";

//! change proposal status
export function updateProposalStatus({ proposalId, ...data }) {
  return http.patch(`/proposal/${proposalId}`, data).then(({ data }) => data.data);
}
