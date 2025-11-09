import { useSearchParams } from "react-router";

function FilterButtons({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const statusValue = searchParams.get(filterField) || options.at(0).value;

  const handleClick = (newStatusValue) => {
    searchParams.set(filterField, newStatusValue);
    setSearchParams(searchParams);
  };

  return (
    <div className="flex items-center gap-x-2 text-xs">
      <span className="font-bold">وضعیت:</span>

      <div className="flex items-center gap-x-2 border border-secondary-100 bg-secondary-0 p-1 rounded-lg">
        {options.map((statusOption) => {
          const isActive = statusOption.value === statusValue;
          return (
            <button
              onClick={() => handleClick(statusOption.value)}
              key={statusOption.value}
              disabled={isActive}
              className={`whitespace-nowrap font-bold px-4 py-1.5 rounded-lg transition-all duration-150 ${
                isActive ? "bg-primary-900 text-white" : "bg-primary-100"
              }`}
            >
              {statusOption.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FilterButtons;
