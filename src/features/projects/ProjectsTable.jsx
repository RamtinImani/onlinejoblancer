import useOwnerProjects from "./useOwnerProjects";

function ProjectsTable() {
  const { isLoading, projects } = useOwnerProjects();
  return <div>ProjectsTable</div>;
}

export default ProjectsTable;
