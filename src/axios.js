import axios from "axios";

const { REACT_APP_SERVER_URL, REACT_APP_CLIENT_URL } = process.env;
axios.defaults.baseURL = `${REACT_APP_SERVER_URL}api`;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.common["Access-Control-Allow-Origin"] =
    REACT_APP_CLIENT_URL;
axios.defaults.headers.common["Access-Control-Max-Age"] = 600;
axios.defaults.headers.common["Access-Control-Allow-Methods"] = [
    "POST",
    "GET",
    "PUT",
    "DELETE"
];
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;
