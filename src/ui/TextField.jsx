function TextField({ label, name, register, validationSchema, errors, type = "text", required }) {
  return (
    <div className="flex flex-col gap-y-2">
      <label className="block font-bold text-secondary-700" htmlFor={name}>
        {label} {required && <span className="text-error">*</span>}
      </label>

      <input
        {...register(name, validationSchema)}
        className="textField--input"
        type={type}
        id={name}
        autoComplete="off"
      />
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">{errors[name]?.message}</span>
      )}
    </div>
  );
}

export default TextField;
