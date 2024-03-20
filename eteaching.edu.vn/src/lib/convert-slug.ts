export const convertToSlug = (input: string) => {
  let temp = input.trim();
  temp = temp.toLowerCase();
  temp = temp
    .normalize("NFD") // chuyển chuỗi sang unicode tổ hợp
    .replace(/[\u0300-\u036f]/g, ""); // xóa các ký tự dấu sau khi tách tổ hợp
  temp = temp.replace(/[đĐ]/g, "d");

  temp = temp.replace(/([^0-9a-z-\s])/g, "");

  temp = temp.replace(/-+/g, "-");

  temp = temp.replace(/^-+|-+$/g, "");

  temp = temp.replace(
    /@|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    ""
  );
  temp = temp.replace(/(\s+)/g, "-");
  temp = temp.replace(/-+/g, "-");
  const output = temp.replace(/^-+|-+$/g, "");
  return output;
};
