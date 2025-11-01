import useCategories from "../../../hooks/useCategories";
import FilterDropDown from "../../../ui/FilterDropDown";

function ProjectsHeader() {
  const { transformedCategories } = useCategories();

  return (
    <div className="flex items-center justify-between text-secondary-700 mb-8">
      <h1 className="font-black text-2xl">لیست پروژه ها</h1>
      <div>
        <FilterDropDown
          filterField="category"
          options={[
            {
              label: "دسته بندی (همه)",
              value: "ALL",
            },
            ...transformedCategories,
          ]}
        />
      </div>
    </div>
  );
}

export default ProjectsHeader;
