import Loader from "../../ui/Loader";
import useProposals from "../proposals/useProposals";
import DashboardHeader from "../../ui/DashboardHeader";
import Stats from "./Stats";

function DashboardLayout() {
  const { proposals, isLoadingProposals } = useProposals();

  if (isLoadingProposals) return <Loader />;

  return (
    <div>
      <DashboardHeader />
      <Stats proposals={proposals} />
    </div>
  );
}

export default DashboardLayout;
