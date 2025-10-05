import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewProject } from "../../services/projectService";
import toast from "react-hot-toast";

export default function useCreateProject() {
  const queryClient = useQueryClient();

  const { mutate: createProject, isPending: isCreatingProject } = useMutation({
    mutationFn: createNewProject,
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

  return { createProject, isCreatingProject };
}
