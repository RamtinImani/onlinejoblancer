import ProjectHeader from "../features/project/ProjectHeader";
import ProposalsTable from "../features/project/ProposalsTable";
import useProject from "../features/project/useProject";
import Loader from "../ui/Loader";

function Project() {
  const { project, isLoadingProject } = useProject();

  if (isLoadingProject) return <Loader />;

  return (
    <div>
      <ProjectHeader project={project} />
      <ProposalsTable proposals={project.proposals} />
    </div>
  );
}

export default Project;
