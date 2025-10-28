import { toPersianNumbersWithComma } from "../utils/toPersianNumber";

const colors = {
  primary: "bg-primary-200 text-primary-700",
  green: "bg-green-200 text-green-700",
  orange: "bg-orange-200 text-orange-700",
};

function Stat({ icon, value, title, color }) {
  return (
    <div className="flex items-center bg-secondary-0 p-4 rounded-lg gap-x-4">
      <div
        className={`flex items-center justify-center
       p-2 aspect-square rounded-full
       ${colors[color]}`}
      >
        {icon}
      </div>
      <div className="flex flex-col gap-y-2">
        <h5 className="font-bold text-secondary-500 text-lg">{title}</h5>
        <p className="font-bold text-secondary-900 text-3xl">{toPersianNumbersWithComma(value)}</p>
      </div>
    </div>
  );
}

export default Stat;
