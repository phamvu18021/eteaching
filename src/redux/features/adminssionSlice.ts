import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IAdmission {
  title?: string;
  school?: string;
  major?: string;
  type_object?: string;
  block?: string;
  area?: string;
  method?: string;
  total_time?: string;
  block_combine?: string;
  channel?: string;
  point?: string;
}

const initialState: IAdmission = {
  title: "all",
  school: "all",
  major: "all",
  type_object: "all",
  block: "all",
  area: "all",
  method: "all",
  total_time: "all",
  block_combine: "all",
  channel: "all",
  point: "all"
};

export const admissionSlice = createSlice({
  name: "admissions",
  initialState,
  reducers: {
    changeQuery: (state, action: PayloadAction<IAdmission>) => {
      state = { ...state, ...action.payload };
    }
  }
});

// Action creators are generated for each case reducer function
export const { changeQuery } = admissionSlice.actions;

export default admissionSlice.reducer;
