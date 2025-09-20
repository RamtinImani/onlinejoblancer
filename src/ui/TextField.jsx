function TextField({ label, name, value, onChange }) {
  return (
    <div className="flex flex-col gap-y-2">
      <label className="block font-bold text-secondary-700" htmlFor={name}>
        {label}
      </label>

      <input
        value={value}
        onChange={onChange}
        type="text"
        className="textField--input"
        id={name}
        name={name}
        autoComplete="off"
      />
    </div>
  );
}

export default TextField;
