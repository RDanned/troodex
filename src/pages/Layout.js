import {
    Outlet
} from "react-router-dom";
import Navbar from "../components/Navbar";

function Layout() {
    return (
        <div className="App">
            <Navbar />
            {/*<FirstTask />*/}
            <div className="page">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
