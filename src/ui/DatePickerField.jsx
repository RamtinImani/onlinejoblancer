import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function DatePickerField({ label, date, setDate }) {
  return (
    <div className="flex flex-col gap-y-2">
      <label className="block font-bold text-secondary-700">{label}</label>

      <DatePicker
        value={date}
        onChange={(date) => setDate(date)}
        containerClassName="w-full"
        calendarPosition="bottom-center"
        inputClass="textField--input"
        format="YYYY/MM/DD"
        calendar={persian}
        locale={persian_fa}
      />
    </div>
  );
}

export default DatePickerField;
