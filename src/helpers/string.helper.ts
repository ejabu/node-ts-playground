export const parseFullName = (fullName: string) => {
  const words = fullName.split(" ");
  const firstName = words.shift()
  const lastName = words.pop()
  return [firstName, lastName]
}
