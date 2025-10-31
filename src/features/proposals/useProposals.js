import { useQuery } from "@tanstack/react-query";
import { getProposals } from "../../services/proposalService";

export default function useProposals() {
  const { data, isLoading: isLoadingProposals } = useQuery({
    queryKey: ["proposals"],
    queryFn: getProposals,
  });

  const { proposals } = data || {};

  return { isLoadingProposals, proposals };
}
