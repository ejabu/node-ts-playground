import config from './configs/config';

export const parseFullName = (fullName: string) => {
  const words = fullName.split(" ");
  const firstName = words.shift()
  const lastName = words.pop()
  return [firstName, lastName]
}

async function testFunction() {
  const nice = "2023-07-25T14:30:00Z"
  const datx = new Date(nice);
  const dat2 = datx.toISOString().slice(0, 10)
  const dat23 = new Date(dat2);
  console.log('dat2 =>\n', dat23.getTime());
  console.log('datx =>\n', datx.getTime());
  console.log('getUTCMonth =>\n', datx.toISOString().slice(0, 10));
}

async function main() {
  testFunction();
}

main();
