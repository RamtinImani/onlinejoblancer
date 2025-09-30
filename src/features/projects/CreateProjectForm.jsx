import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";

function CreateProjectForm({ onClose }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <div>
      <form className="flex flex-col gap-y-5">
        <TextField
          label="عنوان پروژه"
          name="title"
          register={register}
          required
          validationSchema={{
            required: "عنوان پروژه ضروری است",
            minLength: {
              value: 10,
              message: "حداقل 10 کاراکتر را وارد کنید",
            },
          }}
          errors={errors}
        />

        <button type="submit" className="btn btn--primary w-full">
          تایید
        </button>
      </form>
    </div>
  );
}

export default CreateProjectForm;
