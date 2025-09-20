import { useState } from "react";
import OTPInput from "react-otp-input";

function CheckOTPForm() {
  const [otp, setOtp] = useState("");

  return (
    <div className="bg-secondary-0 p-8 rounded-2xl shadow-md shadow-primary-300">
      <form className="flex flex-col gap-y-5 relative">
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
