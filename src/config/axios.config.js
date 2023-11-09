import axiosLibrary from "axios";

const axios = axiosLibrary.create({
    baseURL: "http://localhost:5000",
    // baseURL: "https://click-jobs-server.vercel.app"
});

export default axios