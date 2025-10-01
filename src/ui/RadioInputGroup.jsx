import RadioInput from "./RadioInput";

function RadioInputGroup({ register, watch, errors, configs }) {
  const { name, validationSchema = {}, options } = configs;

  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex justify-center items-center gap-x-4">
        {options.map(({ label, value }) => (
          <RadioInput
            key={value}
            label={label}
            value={value}
            id={value}
            name={name}
            register={register}
            watch={watch}
            validationSchema={validationSchema}
            errors={errors}
          />
        ))}
      </div>
      <div>
        {errors && errors[name] && (
          <span className="text-error block text-sm mt-2">{errors[name]?.message}</span>
        )}
      </div>
    </div>
  );
}

export default RadioInputGroup;
