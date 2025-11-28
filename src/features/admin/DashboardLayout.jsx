import useProjects from "../../hooks/useProjects";
import DashboardHeader from "../../ui/DashboardHeader";
import Loader from "../../ui/Loader";
import useProposals from "../proposals/useProposals";
import Stats from "./Stats";

function DashboardLayout() {
  const { isLoadingProjects, projects } = useProjects();
  const { isLoadingProposals, proposals } = useProposals();

  if (isLoadingProjects || isLoadingProposals) return <Loader />;

  return (
    <div>
      <DashboardHeader />
      <Stats projects={projects.length} proposals={proposals.length} />
    </div>
  );
}

export default DashboardLayout;
