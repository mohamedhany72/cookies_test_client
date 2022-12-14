import axios from "axios";

const GET_URL = "/get_cookies";
const POST_URL = "/test_cookies";
const DELETE_URL = "/remove_cookies";

export const getCookies = async () => {
    const res = await axios.get(GET_URL);
    return res;
};

export const postData = async (user, pswd) => {
    const res = await axios.post(POST_URL, JSON.stringify({ user, pswd }), {
        withCredentials: true
    });

    return res;
};

export const removeCookies = async () => {
    const res = await axios.delete(DELETE_URL, {
        withCredentials: true
    });
    return res;
};
