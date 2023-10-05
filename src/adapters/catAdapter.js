export const catAdapter = (response) => {
  return {
    id: response[0].id,
    url: response[0].url,
  };
};
