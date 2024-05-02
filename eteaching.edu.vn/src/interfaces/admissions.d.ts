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

export interface IBenchMarkApi {
  _id: string;
  title: string;
  year: {
    label: string;
    code: string;
  };
  school: {
    label: string;
    code: string;
  };
  major: {
    label: string;
    code: string;
  };
  major_code: string;
  block_combine: {
    label: string;
    code: string;
  }[];
  point: string;
  note: string;
  point_2016: string;
  point_2017: string;
  point_2018: string;
  point_2019: string;
  point_2020: string;
  point_2021: string;
  point_2022: string;
  point_2023: string;
  point_2024: string;
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
