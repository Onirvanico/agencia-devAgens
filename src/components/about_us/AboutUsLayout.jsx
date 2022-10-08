import HeaderApp from "../header/HeaderApp";
import NavigationMain from "../header/NavegationMain";
import UserAuthentication from "../header/UserAuthentication";
import MainAboutUs from "./MainAboutUs";
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