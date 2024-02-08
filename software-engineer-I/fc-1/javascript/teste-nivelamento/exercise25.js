import { API_URL } from "./utils/api.js";
import { clientsEndpoint } from "./utils/api.js";

async function fetchData() {
  const response = await fetch(API_URL + clientsEndpoint);
  return response.json();
}

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
