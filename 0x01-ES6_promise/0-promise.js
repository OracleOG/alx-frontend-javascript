export default function getResponseFromAPI(apiResponse) {
    return new Promise((resolve, reject) => {
        if (apiResponse) {
            resolve("Succesful response");
        } else {
            reject("Error: Unsuccessful response");
        }
    })
};
