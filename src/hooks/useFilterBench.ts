import { toSlug } from "@/ultil/toSlug";

const filterBlock = ({
  listBen,
  blockValue
}: {
  listBen: any;
  blockValue: string;
}) => {
  if (blockValue === "all") {
    return listBen;
  } else {
    return listBen.filter((item: any) =>
      item.block_combine.some((item: any) => item.code.includes(blockValue))
    );
  }
};

const filterSort = ({
  listBen,
  sortValue
}: {
  listBen: any;
  sortValue: string;
}) => {
  switch (sortValue) {
    case "all":
      return listBen;
    case "nameaz":
      return listBen.sort((a: any, b: any) => {
        if (
          a.title.substring(0, 2).toLowerCase() >
          b.title.substring(0, 2).toLowerCase()
        )
          return 1;
        if (a.title.substring(0, 2) < b.title.substring(0, 2).toLowerCase())
          return -1;
        return 0;
      });

    case "nameza":
      return listBen.sort((a: any, b: any) => {
        if (
          a.title.substring(0, 2).toLowerCase() <
          b.title.substring(0, 2).toLowerCase()
        )
          return 1;
        if (
          a.title.substring(0, 2).toLowerCase() >
          b.title.substring(0, 2).toLowerCase()
        )
          return -1;
        return 0;
      });

    case "codeaz":
      return listBen.sort((a: any, b: any) => {
        if (
          a.major_code.substring(0, 2).toLowerCase() >
          b.major_code.substring(0, 2).toLowerCase()
        )
          return 1;
        if (
          a.major_code.substring(0, 2).toLowerCase() <
          b.major_code.substring(0, 2).toLowerCase()
        )
          return -1;
        return 0;
      });

    case "codeza":
      return listBen.sort((a: any, b: any) => {
        if (a.major_code.substring(0, 2) < b.major_code.substring(0, 2))
          return 1;
        if (a.major_code.substring(0, 2) > b.major_code.substring(0, 2))
          return -1;
        return 0;
      });

    case "pointaz":
      return listBen.sort((a: any, b: any) => {
        if (a.point > b.point) return 1;
        if (a.point < b.point) return -1;
        return 0;
      });

    case "pointza":
      return listBen.sort((a: any, b: any) => {
        if (a.point < b.point) return 1;
        if (a.point > b.point) return -1;
        return 0;
      });
  }
};

const searchSort = ({
  listBen,
  searchValue
}: {
  listBen: any;
  searchValue: string;
}) => {
  let listnew = listBen?.filter((item: any) => {
    return (
      item &&
      (toSlug({ input: item.title, type: "signed" }).includes(
        toSlug({ input: searchValue, type: "signed" })
      ) ||
        toSlug({ input: item.major_code, type: "signed" }).includes(
          toSlug({ input: searchValue, type: "signed" })
        ))
    );
  });
  return listnew;
};

const filterYear = ({ listBen, year }: { listBen: any; year: string }) => {
  if (year === "all") return listBen;
  else return listBen.filter((item: any) => item.year.code === year);
};

const filerPointRange = ({
  listBen,
  startValue,
  endValue
}: {
  listBen: any;
  startValue: string;
  endValue: string;
}) => {
  return listBen.filter((item: any) => {
    return (
      Number(item.point) >= Number(startValue) &&
      Number(item.point) <= Number(endValue)
    );
  });
};

export const usezFilterBench = ({
  blockValue,
  sortValue,
  searchValue,
  startValue,
  endValue,
  year,
  listBen
}: {
  blockValue: string;
  sortValue: string;
  searchValue: string;
  startValue?: string;
  endValue?: string;
  year?: string;
  listBen: any;
}) => {
  const filteredBlock = filterBlock({ listBen, blockValue });
  const filteredSort = filterSort({ listBen: filteredBlock, sortValue });
  const filteredSearch = searchSort({ listBen: filteredSort, searchValue });
  const filteredYear = year
    ? filterYear({ listBen: filteredSearch, year })
    : filteredSearch;
  const filteredPointRange =
    startValue && endValue
      ? filerPointRange({ listBen: filteredYear, startValue, endValue })
      : filteredYear;
  return filteredPointRange;
};
