export default function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName,
    laslastName: lastName,
  });
}
