import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getProject } from "../../services/projectService";

export default function useProject() {
  //! get project's id from url
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["project", id],
    queryFn: () => getProject(id),
    retry: false,
  });

  const { project } = data || {};

  return { project, isLoading };
}
