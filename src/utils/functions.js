// eslint-disable-next-line import/prefer-default-export
export const stringToFloatAndReplaceComaByPoint = (string) => {
  const regex = /,+/;
  return (parseFloat(string.replace(regex, '.')));
};
export const checkPasswordLenght = (password) => {
  const regex = new RegExp('.{8,}');
  return (regex.test(password));
};

export const checkBothPasswords = (password, passwordCheck) => {
  return (password === passwordCheck);
};

