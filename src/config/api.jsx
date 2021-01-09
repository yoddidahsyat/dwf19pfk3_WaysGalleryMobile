import axios from "axios";

export const API = axios.create({
    baseURL: "http://192.168.100.7:5000/api/v1",
});

export const uploadURL = "http://192.168.100.7:5000/api/v1/uploads/";

export const setAuthToken = (token) => {
    if (token) {
        API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete API.defaults.headers.common["Authorization"];
    }
};
