export interface IFilterCommonPayload {
  major: string;
  city: string;
  channel: string;
  method: string;
  search_text: string;
}
type TUnit = "major" | "area" | "method" | "channel";

type TItem = {
  label: string;
  major?: string;
  city?: string;
  method?: string;
  channel?: string;
};

export interface IFilterCommonApi {
  _id: string;
  label: string;
  unit: TUnit;
  items: TItem[];
  time_stamp: string;
}

export interface IFilterCommonState {
  loading: "idle" | "pending" | "succeeded" | "failed";
  data: IFilterCommonApi[];
  current: {
    major: string;
    city: string;
    channel: string;
    method: string;
    search_text: string;
  };
}
