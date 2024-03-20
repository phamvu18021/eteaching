export const formatDate = (inputDateString: Date | string) => {
  const date = new Date(inputDateString);

  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();

  const formattedDateString = `${day}/${month}/${year}`;

  return formattedDateString;
};
