import { useQuery } from "@tanstack/react-query";
import { getAllProjects } from "../services/projectService";
import { useLocation } from "react-router";

export default function useProjects() {
  //! access to the full searched params from location
  const { search } = useLocation();
  //! convert search params to object for filter projects
  const queryObject = Object.fromEntries(new URLSearchParams(search));

  const { data, isLoading: isLoadingProjects } = useQuery({
    queryKey: ["projects", queryObject],
    queryFn: () => getAllProjects(search),
  });

  const { projects } = data || {};

  return { projects, isLoadingProjects };
}
