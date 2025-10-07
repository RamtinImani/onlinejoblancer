import Loader from "../../ui/Loader";
import Toggle from "../../ui/Toggle";
import useToggleProjectStatus from "./useToggleProjectStatus";

function ToggleProjectStatus({ project }) {
  const { status } = project;
  const { toggleStatus, isTogglingProjectStatus } = useToggleProjectStatus();

  const toggleHandler = () => {
    const newStatus = status === "OPEN" ? "CLOSED" : "OPEN";

    toggleStatus({ id: project._id, data: { status: newStatus } });
  };

  return (
    <div className="w-20">
      {isTogglingProjectStatus ? (
        <Loader />
      ) : (
        <Toggle
          label={status === "OPEN" ? "باز" : "بسته"}
          enabled={status === "OPEN" ? true : false}
          onChange={toggleHandler}
        />
      )}
    </div>
  );
}

export default ToggleProjectStatus;
