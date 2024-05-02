import {
  IFiterHomepageApi,
  TFilterHomepageUnit,
  TFilterHompageItem
} from "@/interfaces/filterHompage";
import { getFilterHomepage } from "@/ultil/fetch-auth";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface IFilterHomepageState {
  loading: "idle" | "pending" | "succeeded" | "failed";
  data: IFiterHomepageApi[];
  unit: TFilterHomepageUnit;
  list_value_of_units: TFilterHompageItem[];
  unit_value: string;
}

const initialState: IFilterHomepageState = {
  loading: "idle",
  data: [],
  unit: "area",
  list_value_of_units: [],
  unit_value: "all"
};

export const fetchFilterHomepageThunk = createAsyncThunk(
  "filter/filterHomepageThunk",
  async () => {
    const data = await getFilterHomepage();
    return data?.data;
  }
);

export const filterHomepageSlice = createSlice({
  name: "filterHomepage",
  initialState,
  reducers: {
    changeUnit: (state, action: PayloadAction<TFilterHomepageUnit>) => {
      state.unit = action.payload;
      state.list_value_of_units =
        state.data?.find((item) => item.unit === action.payload)?.items || [];
      state.unit_value = "all";
    },

    changeListValueOfUnits: (
      state,
      action: PayloadAction<{ label: string; code: string }[]>
    ) => {
      state.list_value_of_units = action.payload;
    },

    changeUnitValue: (state, action: PayloadAction<string>) => {
      state.unit_value = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchFilterHomepageThunk.pending, (state) => {
      state.loading = "pending";
    });

    builder.addCase(fetchFilterHomepageThunk.fulfilled, (state, action) => {
      state.loading = "succeeded";
      const filters: IFiterHomepageApi[] = action.payload;
      if (filters && filters.length > 0) {
        state.data = filters;
        state.unit = filters[0].unit;
        state.list_value_of_units = filters[0].items;
        state.unit_value = "all";
      }
    });

    builder.addCase(fetchFilterHomepageThunk.rejected, (state) => {
      state.loading = "failed";
    });
  }
});

export const { changeUnit, changeUnitValue, changeListValueOfUnits } =
  filterHomepageSlice.actions;

export default filterHomepageSlice.reducer;
