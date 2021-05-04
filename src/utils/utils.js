export const getLocation = (location) => {
  const { search } = location;
  const urlSearchParams = new URLSearchParams(search);

  return Object.fromEntries(urlSearchParams);
};
