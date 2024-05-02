export type TFilterHomepageUnit =
  | "major"
  | "block"
  | "area"
  | "total_time"
  | "method"
  | "type_object"
  | "channel"
  | "block_combine"
  | "point";

type TFilterHompageItem = {
  label: string;
  major?: string;
  block?: string;
  area?: string;
  total_time?: string;
  method?: string;
  type_object?: string;
  channel?: string;
  block_combine?: string;
  point?: string;
};

export interface IFiterHomepageApi {
  _id: string;
  label: string;
  unit: TFilterHomepageUnit;
  items: TFilterHompageItem[];
  time_stamp: string;
}
