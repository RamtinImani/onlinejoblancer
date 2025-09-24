import { useState } from "react";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  return (
    <div className="flex justify-center items-center pt-10 md:pt-48">
      <div className="w-full sm:max-w-sm bg-secondary-0 p-8 rounded-2xl shadow-md shadow-primary-300">
        <form className="flex flex-col gap-y-5">
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
            ثبت اطلاعات
          </button>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
