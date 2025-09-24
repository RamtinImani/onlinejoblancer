import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getOtp } from "../../services/authService";

const TIME = 90;

function AuthContainer() {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [timer, setTimer] = useState(TIME);

  //! get otp mutation
  const { isPending, mutateAsync } = useMutation({ mutationFn: getOtp });

  const sendOTPHandler = async (event) => {
    event.preventDefault();
    try {
      const { message } = await mutateAsync({ phoneNumber });
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
            phoneNumber={phoneNumber}
            onChangePhoneNumber={(event) => setPhoneNumber(event.target.value)}
            onSendOTP={sendOTPHandler}
            isSendingOTP={isPending}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            phoneNumber={phoneNumber}
            onBack={() => setStep(1)}
            onResendOTP={sendOTPHandler}
            timer={timer}
            setTimer={setTimer}
          />
        );
      default:
        return null;
    }
  };

  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
}

export default AuthContainer;
