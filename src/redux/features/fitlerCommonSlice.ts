import {
  IFilterCommonApi,
  IFilterCommonPayload,
  IFilterCommonState
} from "@/interfaces/filterCommon";
import { getFilterCommon } from "@/ultil/fetch-auth";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: IFilterCommonState = {
  loading: "idle",
  data: [],
  current: {
    major: "all",
    city: "all",
    channel: "all",
    method: "all",
    search_text: ""
  }
};

export const fetchFilterCommonThunk = createAsyncThunk(
  "filter/filterCommonThunk",
  async () => {
    const data = await getFilterCommon();
    if (!data?.error) return data?.data;
    return null;
  }
);

export const filterCommonSlice = createSlice({
  name: "filterCommon",
  initialState,
  reducers: {
    changeUnit: (state, action: PayloadAction<IFilterCommonPayload>) => {
      state.current = { ...state.current, ...action.payload };
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchFilterCommonThunk.pending, (state) => {
      state.loading = "pending";
    });

    builder.addCase(fetchFilterCommonThunk.fulfilled, (state, action) => {
      state.loading = "succeeded";
      const filters: IFilterCommonApi[] = action.payload;
      filters && filters.length > 0 && (state.data = filters);
    });

    builder.addCase(fetchFilterCommonThunk.rejected, (state) => {
      state.loading = "failed";
    });
  }
});

export const { changeUnit } = filterCommonSlice.actions;

export default filterCommonSlice.reducer;
