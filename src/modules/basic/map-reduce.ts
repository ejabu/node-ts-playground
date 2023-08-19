export const countPets = () => {
  const pets = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rabbit"];
  const res = pets.reduce((obj, pet) => {
    if (!obj[pet]) {
      obj[pet] = 1;
    } else {
      obj[pet]++;
    }
    return obj;
  }, {});

  console.log("res =>\n", res);
};

export const groupBasedEngineSource = () => {
  const issues = [
    {
      id: "1233",
      engine_source: "qualys",
    },
    {
      id: "6235",
      engine_source: "nessus",
    },
    {
      id: "1234",
      engine_source: "qualys",
    },
  ];
  const res = issues.reduce(function (obj, issue) {
    if (!obj[issue.engine_source]) {
      obj[issue.engine_source] = [issue.id];
    } else {
      obj[issue.engine_source].push(issue.id);
    }
    return obj;
  }, {});

  console.log("res =>\n", res);
};

export const sumValues = () => {
  const source = {
    Exposure: 3,
    Hardening: 2,
    Patching: 3,
  };

  const sum = Object.values(source).reduce((a, b) => a + b);
  console.log("sum =>\n", sum);
};
