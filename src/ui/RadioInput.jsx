function RadioInput({ name, id, value, label, onChangeRadio, checked }) {
  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <input
        type="radio"
        name={name}
        id={id}
        className="size-4 cursor-pointer accent-primary-800"
        value={value}
        onChange={onChangeRadio}
        checked={checked}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default RadioInput;
