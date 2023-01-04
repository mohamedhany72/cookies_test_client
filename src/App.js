import "./App.css";
import * as API from "./API";
import { setRefreshCookie, clearCookies } from "./setCookies";

function App() {
    const getCookies = async () => {
        // alert("get shitt");
        const res = await API.getCookies();
        const refresh = res?.data?.refresh;
        // const browser = res?.data?.browser;
        setRefreshCookie(refresh);
        // setBrowserCookie(browser); setBrowserCookie,
    };

    const postData = async () => {
        const user = "mido is good";
        const pswd = "password";
        await API.postData(user, pswd);
    };

    const removeCookies = async () => {
        clearCookies();
        await API.removeCookies();
    };

    return (
        <div className="App">
            {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header> */}
            <div className="container">
                <button className="btn btn-danger" onClick={getCookies}>
                    get cookies
                </button>
                <hr />
                <button className="btn btn-danger" onClick={postData}>
                    send cookies
                </button>
                <hr />
                <button className="btn btn-danger" onClick={removeCookies}>
                    clear cookies
                </button>
            </div>
        </div>
    );
}

export default App;
