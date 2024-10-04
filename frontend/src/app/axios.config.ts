import axios from "axios";

const baseURL = "http://localhost:8000";

export function axiosInstance() {
  return axios.create({
    baseURL,
  });
}
