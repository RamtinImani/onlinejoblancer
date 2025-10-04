import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../services/categoryService";

export default function useCategories() {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const { categories: rawCategories = [] } = data || {};

  const categories = rawCategories.map((category) => {
    return {
      label: category.title,
      value: category._id,
    };
  });

  const transformedCategories = rawCategories.map((category) => {
    return {
      label: category.title,
      value: category.englishTitle,
    };
  });

  return { isLoading, categories, transformedCategories };
}
