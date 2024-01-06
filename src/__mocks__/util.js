export const createCopy = (data) => {
  return JSON.parse(JSON.stringify(data));
};

export const createID = (list) => {
  const idLists = list.map((item) => item.id).sort((a, b) => a > b);
  return idLists[idLists.length - 1] + 1;
};
