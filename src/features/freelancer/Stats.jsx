import { HiCollection, HiCurrencyDollar, HiOutlineViewGrid } from "react-icons/hi";
import Stat from "../../ui/Stat";

function Stats({ proposals }) {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((proposal) => proposal.status === 2);
  const balance = acceptedProposals.reduce((acc, current) => acc + current.price, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Stat
        color="primary"
        title="درخواست ها"
        value={numOfProposals}
        icon={<HiOutlineViewGrid className="size-20" />}
      />
      <Stat
        color="green"
        title="درخواست های تایید شده"
        value={acceptedProposals.length}
        icon={<HiCollection className="size-20" />}
      />
      <Stat
        color="orange"
        title="کیف پول"
        value={balance}
        icon={<HiCurrencyDollar className="size-20" />}
      />
    </div>
  );
}

export default Stats;
