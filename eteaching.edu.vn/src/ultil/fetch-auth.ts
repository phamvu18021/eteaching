const token_next = process.env.NEXT_PUBLIC_TOKEN_NEXT || "";

export const fetchAuth = ({
  api_url,
  method,
  form_data
}: {
  api_url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  form_data?: any;
}) =>
  fetch(api_url, {
    method: method || "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: token_next
    },
    body: form_data ? JSON.stringify(form_data) : null
  });

export const getPosts = async ({
  page,
  perpage,
  type
}: {
  type?: "news" | "mostview" | "majors" | "university";
  page?: string | number;
  perpage: string | number;
}) => {
  const res = await fetchAuth({
    api_url: `/api/posts/?type=${type}&page=${page}&perpage=${perpage}`
  });

  const data = await res.json();

  return data;
};

export const getAdmissions = async ({
  page = "1",
  perpage = "9",
  school = "all",
  major = "all",
  type_object = "all",
  block = "all",
  area = "all",
  city = "all",
  method = "all",
  channel = "all",
  point = "all"
}: {
  page?: string;
  perpage?: string;
  school?: string;
  major?: string;
  type_object?: string;
  block?: string;
  area?: string;
  city?: string;
  method?: string;
  channel?: string;
  point?: string;
}) => {
  try {
    const res = await fetchAuth({
      api_url: `/api/admin/list-admission/?page=${page}&perpage=${perpage}&school=${school}&major=${major}&type_object=${type_object}&block=${block}&area=${area}&city=${city}&method=${method}&channel=${channel}&point=${point}`,
      method: "POST"
    });
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
    return { error: "Filed to get admissions" };
  }
};

export const getAdmission = async ({ id }: { id: string }) => {
  try {
    const res = await fetchAuth({
      api_url: `/api/admin/admission/?id=${id}`,
      method: "POST"
    });
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
    return { error: "Filed to get admission" };
  }
};

export const getFilterHomepage = async () => {
  const response = await fetchAuth({
    api_url: `/api/admin/filter-homepage`,
    method: "POST"
  });
  const data = await response.json();
  return data;
};

export const getFilterCommon = async () => {
  try {
    const response = await fetchAuth({
      api_url: `/api/admin/filter-common`,
      method: "POST"
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return { error: "Filed to get filter common" };
  }
};

export const getBenchMarks = async ({
  page = "1",
  perpage = "9",
  school = "all",
  major = "all",
  block_combine = "all",
  year = "all",
  point = "all"
}: {
  page?: string;
  perpage?: string;
  school?: string;
  major?: string;
  block_combine?: string;
  year?: string;
  point?: string;
}) => {
  try {
    const res = await fetchAuth({
      api_url: `/api/admin/list-benchmark/?page=${page}&perpage=${perpage}&school=${school}&major=${major}&block_combine=${block_combine}&year=${year}&point=${point}`,
      method: "POST"
    });
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
    return { error: "Failed to get list benchmark" };
  }
};

export const getFilterBenchMark = async () => {
  try {
    const response = await fetchAuth({
      api_url: `/api/admin/filter-benchmark`,
      method: "POST"
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return { error: "Filed to get filter benchmark" };
  }
};

export const getMajorUniver = async () => {
  try {
    const response = await fetchAuth({
      api_url: `/api/admin/major-univer`,
      method: "POST"
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return { error: "Filed to get school and univer" };
  }
};

export const getBenchMarkByUni = async ({ unicode }: { unicode: string }) => {
  try {
    const response = await fetchAuth({
      api_url: `/api/admin/benchmark-by-university/?unicode=${unicode}`,
      method: "POST"
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return { error: "Failed to get benchmark by university" };
  }
};

export const getBenchMarkByMajor = async ({ major }: { major: string }) => {
  try {
    const response = await fetchAuth({
      api_url: `/api/admin/benchmark-by-major/?major=${major}`,
      method: "POST"
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return { error: "Failed to get benchmark by major" };
  }
};
