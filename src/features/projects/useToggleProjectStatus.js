import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleProjectStatus } from "../../services/projectService";
import toast from "react-hot-toast";

export default function useToggleProjectStatus() {
  const queryClient = useQueryClient();

  const { mutate: toggleStatus, isPending: isTogglingProjectStatus } = useMutation({
    mutationFn: toggleProjectStatus,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
      toast.success(data.message);
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { toggleStatus, isTogglingProjectStatus };
}
