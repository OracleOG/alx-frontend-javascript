export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve('Succesful response');

    reject(new Error('Unsuccessful response'));
  });
}
