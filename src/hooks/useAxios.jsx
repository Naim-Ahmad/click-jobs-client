import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  // baseURL: "https://click-jobs-server.vercel.app",
  withCredentials: true,
});

export default function useAxios() {

  return axiosInstance;
}
