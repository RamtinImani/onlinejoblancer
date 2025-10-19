import { useMutation } from "@tanstack/react-query";
import { updateProposalStatus } from "../../services/proposalService";
import toast from "react-hot-toast";

export default function useChangeProposalStatus() {
  const { mutate: changeProposalStatus, isPending: isChangingProposalStatus } = useMutation({
    mutationFn: updateProposalStatus,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { isChangingProposalStatus, changeProposalStatus };
}
