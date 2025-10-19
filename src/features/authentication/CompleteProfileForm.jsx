import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import Loader from "../../ui/Loader";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import RadioInputGroup from "../../ui/RadioInputGroup";

function CompleteProfileForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  //! complete profile mutation
  const { isPending, mutateAsync } = useMutation({ mutationFn: completeProfile });

  const completeProfileHandler = async (data) => {
    if (!data.name || !data.email || !data.role)
      return toast.error("پر کردن تمام فیلد ها الزامی است");

    try {
      const { message, user } = await mutateAsync(data);
      toast.success(message);

      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", {
          icon: "⏳",
        });
        return;
      }

      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-y-5 pt-10 md:pt-20">
      <h3 className="text-2xl">تکمیل اطلاعات</h3>
      <div className="w-full sm:max-w-sm bg-secondary-0 p-8 rounded-2xl shadow-md shadow-primary-300">
        <form onSubmit={handleSubmit(completeProfileHandler)} className="flex flex-col gap-y-5">
          <TextField
            label="نام و نام خانوادگی"
            name="name"
            register={register}
            required
            validationSchema={{
              required: "نام و نام خانوادگی ضروری است",
            }}
            errors={errors}
          />

          <TextField
            label="ایمیل"
            name="email"
            register={register}
            required
            validationSchema={{
              required: "ایمیل ضروری است",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "ایمیل نامعتبر است",
              },
            }}
            errors={errors}
          />

          <RadioInputGroup
            register={register}
            watch={watch}
            errors={errors}
            configs={{
              name: "role",
              validationSchema: {
                required: "انتخاب نقش ضروری است",
              },
              options: [
                {
                  value: "OWNER",
                  label: "کارفرما",
                },
                {
                  value: "FREELANCER",
                  label: "فریلنسر",
                },
              ],
            }}
          />

          <button type="submit" className="btn btn--primary">
            {isPending ? <Loader /> : "ثبت اطلاعات"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
