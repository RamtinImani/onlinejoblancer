import { useForm } from "react-hook-form";
import SelectOption from "../../../ui/SelectOption";
import useChangeUserStatus from "./useChangeUserStatus";
import Loader from "../../../ui/Loader";

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

function ChangeUserStatus({ userId, onClose }) {
  const { register, handleSubmit } = useForm();
  const { changeUserStatus, isChangingUserStatus } = useChangeUserStatus();

  //! Change user status handler
  const userStatusHandler = (newStatus) => {
    changeUserStatus(
      { userId, newStatus },
      {
        onSuccess: () => {
          onClose();
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(userStatusHandler)}>
      <SelectOption
        name="status"
        label="تغییر وضعیت"
        register={register}
        required
        options={options}
      />
      <button type="submit" className="btn btn--primary w-full mt-8">
        {isChangingUserStatus ? <Loader /> : "تغییر وضعیت"}
      </button>
    </form>
  );
}

export default ChangeUserStatus;
