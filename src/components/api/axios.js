import axios from "axios";

axios.defaults.withCredentials = true;

export default axios.create({
  baseURL: "https://myapi.dataxis.ng",
});
