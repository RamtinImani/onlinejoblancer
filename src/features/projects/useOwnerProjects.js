import { useQuery } from "@tanstack/react-query";
import { getOwnerProjects } from "../../services/projectService";

export default function useOwnerProjects() {
  const { data, isLoading } = useQuery({
    queryKey: ["owner-projects"],
    queryFn: getOwnerProjects,
  });

  const { projects } = data || {};

  return { isLoading, projects };
}
