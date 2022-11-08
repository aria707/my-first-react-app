const createHref = str => {
  return str
    .trim()
    .toLowerCase()
    .split(' ')
    .filter(item => item !== '')
    .join('-');
};

export default createHref;
