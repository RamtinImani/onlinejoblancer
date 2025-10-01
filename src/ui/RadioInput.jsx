function RadioInput({ name, id, value, label, register, watch, validationSchema }) {
  return (
    <div className="flex items-center gap-x-1 text-secondary-600">
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        {...register(name, validationSchema)}
        checked={watch(name) === value}
        className="size-4 cursor-pointer accent-primary-800"
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default RadioInput;
