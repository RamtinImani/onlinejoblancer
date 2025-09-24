import { useState } from "react";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import Loader from "../../ui/Loader";
import { useNavigate } from "react-router";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  //! complete profile mutation
  const { isPending, mutateAsync } = useMutation({ mutationFn: completeProfile });

  const completeProfileHandler = async (event) => {
    event.preventDefault();
    if (!name || !email || !role) return toast.error("پر کردن تمام فیلد ها الزامی است");

    try {
      const { message, user } = await mutateAsync({ name, email, role });
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
    <div className="flex justify-center items-center pt-10 md:pt-48">
      <div className="w-full sm:max-w-sm bg-secondary-0 p-8 rounded-2xl shadow-md shadow-primary-300">
        <form onSubmit={completeProfileHandler} className="flex flex-col gap-y-5">
          <TextField
            label="نام و نام خانوادگی"
            value={name}
            onChange={(event) => setName(event.target.value)}
            name="name"
            required
          />

          <TextField
            label="ایمیل"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            name="email"
            required
          />

          <div className="flex justify-center items-center gap-x-4">
            <RadioInput
              label="کارفرما"
              name="role"
              id="OWNER"
              value="OWNER"
              onChangeRadio={(event) => setRole(event.target.value)}
              checked={role === "OWNER"}
            />
            <RadioInput
              label="فریلنسر"
              name="role"
              id="FREELANCER"
              value="FREELANCER"
              onChangeRadio={(event) => setRole(event.target.value)}
              checked={role === "FREELANCER"}
            />
          </div>

          <button type="submit" className="btn btn--primary">
            {isPending ? <Loader /> : "ثبت اطلاعات"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
