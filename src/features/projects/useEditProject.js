import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProject } from "../../services/projectService";
import toast from "react-hot-toast";

export default function useEditProject() {
  const queryClient = useQueryClient();

  const { mutate: editProject, isPending: isEditingProject } = useMutation({
    mutationFn: updateProject,
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

  return { editProject, isEditingProject };
}
