import { useAppSelector } from "@/redux/store";

export const useFilterCommon = () => {
  const filterHompages = useAppSelector((state) => state.filterCommon);
  const { loading, data, current } = filterHompages;

  return { loading, data, current };
};
