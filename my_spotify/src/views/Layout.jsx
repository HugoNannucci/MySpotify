import {Outlet} from "react-router-dom";
import './layout.scss'
import SearchBar from "../components/SearchBar/SearchBar.jsx";
import NavBar from "../components/NavBar/NavBar.jsx";
import {useRef} from "react";

function Layout() {
    const backgroundRef = useRef(null);

    return (
        <div id={"Layout"}>
            <NavBar />

            

            <div ref={backgroundRef} className={'display'}>
                <Outlet context={{ backgroundRef }} />
            </div>
        </div>
    )
}

export default Layout