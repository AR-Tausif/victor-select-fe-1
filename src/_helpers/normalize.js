const onlyNumbers = value => {
  return value.replace(/[^\d]/g, "");
};

export const normalizeState = value => {
  if (!value) {
    return value;
  }
  value = value.toUpperCase();
  return value.slice(0, 2);
};

const normalizeZip = value => {
  if (!value) {
    return value;
  }

  const onlyNums = onlyNumbers(value);
  if (onlyNums.length > 5) {
    return onlyNums.slice(0, 5);
  }
  return onlyNums;
};

const normalizeDate = value => {
  if (!value) return value;
  let tmp = value.replace(/[^\d^/]/g, "");
  if (tmp.length === 1) {
    tmp.replace();
  }

  if (tmp.length === 3 && tmp.charAt(2) !== "/" && tmp.indexOf("/", 0) === -1) {
    tmp = tmp.slice(0, 2) + "/" + tmp.charAt(2);
  }
  if (
    tmp.length === 6 &&
    tmp.indexOf("/", 0) === 2 &&
    tmp.indexOf("/", 3) === -1
  ) {
    tmp = tmp.slice(0, 5) + "/" + tmp.charAt(5);
  }
  if (tmp.length > 10) {
    tmp = tmp.slice(0, 10);
  }

  return tmp;
};

export const normalizePhone = value => {
  if (!value) {
    return value;
  }

  const onlyNums = onlyNumbers(value);
  if (onlyNums.length > 10) {
    return onlyNums.slice(0, 10);
  }
  return onlyNums;
};

export { normalizeZip };
export { normalizeDate };
