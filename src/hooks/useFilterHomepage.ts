import { useAppSelector } from "@/redux/store";

export const useFilterHomepage = () => {
  const filterHompages = useAppSelector((state) => state.filterHomepage);
  const { loading, data, unit, list_value_of_units, unit_value } =
    filterHompages;

  return { loading, data, unit, list_value_of_units, unit_value };
};
