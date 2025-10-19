import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../../hooks/useMoveBack";

function ProjectHeader({ project }) {
  const moveBack = useMoveBack();

  return (
    <div className="flex items-center gap-x-4 mb-8">
      <button onClick={moveBack}>
        <HiArrowRight className="size-5 text-primary-900" />
      </button>
      <h3 className="font-black text-xl text-secondary-700">
        لیست درخواست های پروژه {project.title}
      </h3>
    </div>
  );
}

export default ProjectHeader;
