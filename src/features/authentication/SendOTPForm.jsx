import { useState } from "react";

function SendOTPForm() {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="bg-secondary-0 p-8 rounded-2xl shadow-md shadow-primary-300">
      <form className="flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-2">
          <label className="block font-bold text-secondary-700" htmlFor="phoneNumber">
            شماره موبایل
          </label>

          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="text"
            className="textField--input"
            id="phoneNumber"
            autoComplete="off"
          />
        </div>
        <button type="submit" className="btn btn--primary">
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
}

export default SendOTPForm;
