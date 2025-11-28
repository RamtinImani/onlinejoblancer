import { HiCollection, HiOutlineViewGrid, HiUser } from "react-icons/hi";
import Stat from "../../ui/Stat";

function Stats({ projects, proposals, users }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Stat color="primary" title="کاربران" value={users} icon={<HiUser className="size-20" />} />

      <Stat
        color="green"
        title="پروژه ها"
        value={projects}
        icon={<HiOutlineViewGrid className="size-20" />}
      />

      <Stat
        color="orange"
        title="درخواست ها"
        value={proposals}
        icon={<HiCollection className="size-20" />}
      />
    </div>
  );
}

export default Stats;
