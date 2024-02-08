import { API_URL } from "./utils/api.js";

const endpoint = "/client";

const fetchPromise = new Promise((resolve, reject) => {
  fetch(API_URL + endpoint)
    .then((res) => {
      if (!res.ok) throw new Error("Error on fetch API");

      return res.json();
    })
    .then((data) => {
      resolve(data);
    })
    .catch((error) => {
      reject(error);
    });
});

fetchPromise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
