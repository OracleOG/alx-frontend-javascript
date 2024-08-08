export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("Succesful response");
        } else {
            reject("Error: Unsuccessful response");
        }
    })
};
