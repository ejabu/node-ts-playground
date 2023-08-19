/**
 * Basic function
 */
const greeting = (person) => {
  return "Hello, " + person;
};

const getUserDetail = function () {
  return {
    name: "Tiwari",
    country: "ID",
  };
};
const wrapper = function () {
  const user = getUserDetail();
  console.log('user =>\n', user);
};

export const runFunction = () => {
  greeting("Tiwari");
  wrapper();
};
