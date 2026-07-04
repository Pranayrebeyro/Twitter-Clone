import axios from "axios";

const api = axios.create({
  baseURL: "https://twitter-clone-production-e529.up.railway.app",
});

export default api;