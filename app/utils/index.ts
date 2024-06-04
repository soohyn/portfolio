export const formatDate = (dateText: string) => {
  const year = dateText.slice(0, 4);
  const month = +dateText.slice(4);

  return year + ". " + month;
};
