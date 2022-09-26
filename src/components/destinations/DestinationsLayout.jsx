import "../../css/destino.css";
import Footer from "../footer/Footer";
import HeaderApp from "../header/Header";
import NavigationMain from "../header/NavegationMain";
import SearchHeader from "../header/SearchHeader";
import MainDestinations from "./MainDestinations";


function DestinationsLayout() {

    return(
        <>
            <HeaderApp navigationMain={<NavigationMain />} searchHeader={<SearchHeader />} />
            <MainDestinations />
            <Footer />
        </>
    );
}

export default DestinationsLayout;