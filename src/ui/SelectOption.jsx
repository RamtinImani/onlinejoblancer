function SelectOption({ label, name, register, options, required }) {
  return (
    <div className="flex flex-col gap-y-2">
      <label htmlFor={name} className="block font-bold text-secondary-700">
        {label} {required && <span className="text-error">*</span>}
      </label>

      <select {...register(name)} id={name} className="textField--input">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectOption;
