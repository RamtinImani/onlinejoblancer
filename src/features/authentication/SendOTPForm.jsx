import TextField from "../../ui/TextField";
import Loader from "../../ui/Loader";

function SendOTPForm({ onSendOTP, isSendingOTP, register }) {
  return (
    <div className="bg-secondary-0 p-8 rounded-2xl shadow-md shadow-primary-300">
      <form onSubmit={onSendOTP} className="flex flex-col gap-y-5">
        <TextField label="شماره موبایل" name="phoneNumber" register={register} required />

        <button type="submit" className="btn btn--primary">
          {isSendingOTP ? <Loader /> : "ارسال کد تایید"}
        </button>
      </form>
    </div>
  );
}

export default SendOTPForm;
