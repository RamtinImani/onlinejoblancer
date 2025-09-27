import CustomNavLink from "./CustomNavlink";
import { HiCollection, HiHome } from "react-icons/hi";

function Sidebar() {
  return (
    <div className="row-start-1 row-span-2 bg-secondary-0 border-l border-secondary-200 p-4">
      <ul className="flex flex-col gap-y-4">
        <CustomNavLink to="dashboard">
          <HiHome />
          <span>داشبورد</span>
        </CustomNavLink>

        <CustomNavLink to="projects">
          <HiCollection />
          <span>پروژه ها</span>
        </CustomNavLink>
      </ul>
    </div>
  );
}

export default Sidebar;
