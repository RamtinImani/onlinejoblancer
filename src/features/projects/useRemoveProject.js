import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProject } from "../../services/projectService";
import toast from "react-hot-toast";

export default function useRemoveProject() {
  //! React Query Client Custom Hook => for access to our queries data
  const queryClient = useQueryClient();

  const { mutate: deleteProject, isPending: isDeletingProject } = useMutation({
    mutationFn: removeProject,
    onSuccess: (data) => {
      toast.success(data.message);
      //! invalidate owner-projects query and update projects data
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { deleteProject, isDeletingProject };
}
