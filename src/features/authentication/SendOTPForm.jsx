import { useState } from "react";
import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";

function SendOTPForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  
  //! get otp mutation
  const { data, isPending, error, mutateAsync } = useMutation({ mutationFn: getOtp });

  const sendOTPHandler = async (event) => {
    event.preventDefault();
    try {
      const { message } = await mutateAsync({ phoneNumber });
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="bg-secondary-0 p-8 rounded-2xl shadow-md shadow-primary-300">
      <form onSubmit={sendOTPHandler} className="flex flex-col gap-y-5">
        <TextField
          label="شماره موبایل"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
        <button type="submit" className="btn btn--primary">
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
}

export default SendOTPForm;
