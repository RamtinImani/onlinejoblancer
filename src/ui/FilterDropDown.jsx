import { useSearchParams } from "react-router";
import Select from "./Select";

function FilterDropDown({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterValue = searchParams.get(filterField) || "";

  //! Filter DropDown Handler
  const handleChange = (e) => {
    searchParams.set(filterField, e.target.value);
    setSearchParams(searchParams);
  };

  return <Select value={filterValue} onChange={handleChange} options={options} />;
}

export default FilterDropDown;
