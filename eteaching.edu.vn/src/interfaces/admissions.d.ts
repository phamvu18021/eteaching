export interface IAdmissionApi {
  _id: string;
  img_thumb: string;
  title: string;
  school: {
    label: string;
    code: string;
  };
  major: {
    label: string;
    code: string;
  }[];
  type_object: {
    label: string;
    code: string;
  }[];
  block: {
    label: string;
    code: string;
  }[];
  area: {
    label: string;
    code: string;
  }[];
  method: {
    label: string;
    code: string;
  }[];
  num: string;
  channel: {
    label: string;
    code: string;
  }[];
  total_time: { label: string; code: string }[];
  block_combine: {
    label: string;
    code: string;
  }[];
  slug_url: string;
  time_stop: string;
  point: {
    label: string;
    code: string;
  };
  time_stamp: string;
}

export interface IAdmissionDetail {
  _id: string;
  img_thumb: string;
  title: { label: string; id: string };
  school: {
    label: string;
    code: string;
  };
  major: {
    label: string;
    code: string;
  }[];
  type_object: {
    label: string;
    code: string;
  }[];
  block: {
    label: string;
    code: string;
  }[];
  area: {
    label: string;
    code: string;
  }[];
  method: {
    label: string;
    code: string;
  }[];
  num: string;
  channel: {
    label: string;
    code: string;
  }[];
  total_time: { label: string; code: string }[];
  block_combine: {
    label: string;
    code: string;
  }[];
  slug_url: string;
  time_stop: string;
  point: {
    label: string;
    code: string;
  };
  time_stamp: string;
}
