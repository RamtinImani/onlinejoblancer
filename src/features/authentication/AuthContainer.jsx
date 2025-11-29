import { useEffect, useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getOtp } from "../../services/authService";
import { useForm } from "react-hook-form";
import useUser from "./useUser";
import { useNavigate } from "react-router";

const TIME = 90;

function AuthContainer() {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, getValues } = useForm();
  const [timer, setTimer] = useState(TIME);
  const { user } = useUser();
  const navigate = useNavigate();

  //! Prevent logged-in users from accessing the authentication page and redirect them to the home page
  useEffect(() => {
    if (user) navigate("/", { replace: true });
  }, [user, navigate]);

  //! get otp mutation
  const { data: otpResponse, isPending, mutateAsync } = useMutation({ mutationFn: getOtp });

  const sendOTPHandler = async (data) => {
    if (!data.phoneNumber) return toast.error("شماره موبایل را وارد کنید");

    try {
      const { message } = await mutateAsync(data);
      toast.success(message);
      setStep(2);
      setTimer(TIME);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            register={register}
            onSendOTP={handleSubmit(sendOTPHandler)}
            isSendingOTP={isPending}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            phoneNumber={getValues("phoneNumber")}
            onBack={() => setStep(1)}
            onResendOTP={sendOTPHandler}
            timer={timer}
            setTimer={setTimer}
            otpResponse={otpResponse}
          />
        );
      default:
        return null;
    }
  };

  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
}

export default AuthContainer;
