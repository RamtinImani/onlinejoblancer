import { useQuery } from "@tanstack/react-query";
import { getAllProjects } from "../services/projectService";

export default function useProjects() {
  const { data, isLoading: isLoadingProjects } = useQuery({
    queryKey: ["projects"],
    queryFn: getAllProjects,
  });

  const { projects } = data || {};

  return { projects, isLoadingProjects };
}
