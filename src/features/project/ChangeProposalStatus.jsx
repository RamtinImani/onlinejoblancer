import { useForm } from "react-hook-form";
import SelectOption from "../../ui/SelectOption";
import useChangeProposalStatus from "./useChangeProposalStatus";
import Loader from "../../ui/Loader";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";

const options = [
  {
    label: "رد شده",
    value: 0,
  },
  {
    label: "در انتظار تایید",
    value: 1,
  },
  {
    label: "تایید شده",
    value: 2,
  },
];

function ChangeProposalStatus({ proposalId, onClose }) {
  const { register, handleSubmit } = useForm();
  const { changeProposalStatus, isChangingProposalStatus } = useChangeProposalStatus();
  const queryClient = useQueryClient();
  const { id: projectId } = useParams();

  const proposalStatusHandler = (data) => {
    changeProposalStatus(
      { proposalId, projectId, ...data },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["project", projectId] });
          onClose();
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(proposalStatusHandler)}>
      <SelectOption
        name="status"
        label="تغییر وضعیت"
        register={register}
        required
        options={options}
      />
      <button type="submit" className="btn btn--primary w-full mt-8">
        {isChangingProposalStatus ? <Loader /> : "تغییر وضعیت"}
      </button>
    </form>
  );
}

export default ChangeProposalStatus;
