import HeaderApp from "../header/Header";
import NavigationMain from "../header/NavegationMain";
import UserAuthentication from "../header/UserAuthentication";
import MainAboutUs from "./MainAboutUs";
import "../../css/sobre-nos.css";
import Footer from "../footer/Footer";

function AboutUsLayout() {
    return(
        <>
            <HeaderApp navigationMain={<NavigationMain />} 
            userAuthentication={<UserAuthentication />} />
            <MainAboutUs />
            <Footer />
        </>
    );
}

export default AboutUsLayout;