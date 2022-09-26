import "../../css/home.css";
import HeaderApp from "../header/Header";
import MainHome from "./MainHome";
import NavigationMain from "../header/NavegationMain";
import SearchHeader from "../header/SearchHeader";
import UserAuthentication from "../header/UserAuthentication";
import Footer from "../footer/Footer";

function HomeLayout() {
    return(
        <div className="app">
            <HeaderApp navigationMain={<NavigationMain />} searchHeader={<SearchHeader />} userAuthentication={<UserAuthentication />}/>
            <MainHome />
            <Footer />
        </div>
    )
}

export default HomeLayout;