import HeaderApp from "../header/Header";
import MainHome from "./MainHome";
import NavigationMain from "../header/NavegationMain";
import SearchHeader from "../header/SearchHeader";
import UserAutentication from "../header/UserAutentication";
import Footer from "../footer/Footer";

function HomeLayout() {
    return(
        <div className="app">
            <HeaderApp navigationMain={<NavigationMain />} searchHeader={<SearchHeader />} userAutentication={<UserAutentication />}/>
            <MainHome />
            <Footer />
        </div>
    )
}

export default HomeLayout;