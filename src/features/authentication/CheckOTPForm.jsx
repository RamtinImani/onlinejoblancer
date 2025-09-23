import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { HiArrowLeft } from "react-icons/hi";

function CheckOTPForm({ phoneNumber, onBack }) {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  //! check otp mutation
  const { data, isPending, error, mutateAsync } = useMutation({ mutationFn: checkOtp });

  const checkOTPHandler = async (event) => {
    event.preventDefault();
    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
      //! check if user profile is completed or not
      if (user.isActive) {
        // navigate user to his panel based on role
      } else {
        navigate("/complete-profile");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="bg-secondary-0 p-8 rounded-2xl shadow-md shadow-primary-300">
      <form onSubmit={checkOTPHandler} className="flex flex-col gap-y-5 relative">
        <button onClick={onBack} className="absolute top-0.5 left-0 cursor-pointer">
          <HiArrowLeft className="size-5 text-secondary-700" />
        </button>

        <div className="flex flex-col gap-y-2">
          <p className="font-bold text-secondary-800">کد تایید را وارد کنید</p>
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderInput={(props) => <input type="number" {...props} />}
            containerStyle="flex flex-row-reverse gap-x-2 justify-center"
            inputStyle={{
              width: "2.5rem",
              padding: ".5rem .2rem",
              border: "2px solid var(--color-primary-500)",
              borderRadius: ".5rem",
              outline: "none",
            }}
          />
        </div>

        <button type="submit" className="btn btn--primary">
          تایید
        </button>
      </form>
    </div>
  );
}

export default CheckOTPForm;
