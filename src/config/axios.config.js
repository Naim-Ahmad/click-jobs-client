import axiosLibrary from "axios";

const axios = axiosLibrary.create({
    baseURL: "http://localhost:5000"
});

export default axios