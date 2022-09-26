import { Outlet } from "react-router-dom";
import HeaderApp from "./header/Header";
import NavigationMain from "./header/NavegationMain";
import SearchHeader from "./header/SearchHeader";
import UserAuthentication from "./header/UserAuthentication";

export default function ContainerApp() {
    return(
        <>
            <Outlet/>
        </>
    );
};

