// eslint-disable-next-line import/prefer-default-export
export const stringToFloatAndReplaceComaByPoint = (string) => {
  const regex = /,+/;
  return (parseFloat(string.replace(regex, '.')));
};
