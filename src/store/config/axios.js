import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://us-central1-homie-front-test.cloudfunctions.net/",
});

export default axiosClient;
