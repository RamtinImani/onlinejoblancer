import useProjects from "../../hooks/useProjects";
import DashboardHeader from "../../ui/DashboardHeader";
import Loader from "../../ui/Loader";
import useProposals from "../proposals/useProposals";
import Stats from "./Stats";
import useUsers from "./useUsers";

function DashboardLayout() {
  const { isLoadingProjects, projects } = useProjects();
  const { isLoadingProposals, proposals } = useProposals();
  const { isLoadingUsers, users } = useUsers();

  if (isLoadingProjects || isLoadingProposals || isLoadingUsers) return <Loader />;

  return (
    <div>
      <DashboardHeader />
      <Stats projects={projects.length} proposals={proposals.length} users={users.length} />
    </div>
  );
}

export default DashboardLayout;
