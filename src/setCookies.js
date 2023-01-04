import Cookies from "js-cookie";
const { REACT_APP_SERVER_DOMAIN } = process.env;

const setRefreshCookie = () => {
    // Cookies.set("refresh", refresh, {
    //     path: "/",
    //     expires: 7,
    //     sameSite: "none",
    //     secure: true,
    //     domain: REACT_APP_SERVER_DOMAIN
    // });

    Cookies.set("x-sign", true, {
        expires: 7,
        path: "/"
        // sameSite: "none",
        // secure: true
    });

    Cookies.set("isLoggedIn", true, {
        path: "/"
        // sameSite: "none",
        // secure: true
    });
};

const setBrowserCookie = (browser) => {
    Cookies.set("browser", browser, {
        expires: 30,
        path: "/",
        sameSite: "none",
        secure: true,
        domain: REACT_APP_SERVER_DOMAIN
    });
};

const clearCookies = () => {
    // alert("what")
    Cookies.remove("browser");
    Cookies.remove("refresh");
    Cookies.remove("x-sign");
    Cookies.remove("isLoggedIn");
};

export { setRefreshCookie, setBrowserCookie, clearCookies };
