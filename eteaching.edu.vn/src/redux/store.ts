import { configureStore } from "@reduxjs/toolkit";
import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector, useStore } from "react-redux";
import adminssionSlice from "./features/adminssionSlice";
import filterHomepageSlice from "./features/filterHomepageSlice";
import fitlerCommonSlice from "./features/fitlerCommonSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      admissions: adminssionSlice,
      filterHomepage: filterHomepageSlice,
      filterCommon: fitlerCommonSlice
    }
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;
