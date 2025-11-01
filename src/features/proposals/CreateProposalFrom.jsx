import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import useCreateProposal from "./useCreateProposal";
import Loader from "../../ui/Loader";

function CreateProposalFrom({ projectId, onClose }) {
  const { createProposal, isCreatingProposal } = useCreateProposal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onNewProposalFormSubmit = (data) => {
    createProposal(
      { ...data, projectId },
      {
        onSuccess: () => {
          onClose();
        },
      }
    );
  };

  return (
    <div>
      <form className="flex flex-col gap-y-5" onSubmit={handleSubmit(onNewProposalFormSubmit)}>
        <TextField
          label="توضیحات درخواست"
          name="description"
          register={register}
          required
          validationSchema={{
            required: "توضیحات درخواست ضروری است",
            minLength: {
              value: 10,
              message: "حداقل 10 کاراکتر را وارد کنید",
            },
          }}
          errors={errors}
        />

        <TextField
          label="قیمت"
          name="price"
          type="number"
          register={register}
          required
          validationSchema={{
            required: "قیمت ضروری است",
          }}
          errors={errors}
        />

        <TextField
          label="زمان تحویل (روز)"
          name="duration"
          type="number"
          register={register}
          required
          validationSchema={{
            required: "زمان تحویل ضروری است",
          }}
          errors={errors}
        />

        <button type="submit" className="btn btn--primary w-full">
          {isCreatingProposal ? <Loader /> : "تایید"}
        </button>
      </form>
    </div>
  );
}

export default CreateProposalFrom;
