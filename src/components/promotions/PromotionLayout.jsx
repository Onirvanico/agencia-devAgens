import HeaderApp from "../header/Header";
import NavigationMain from "../header/NavegationMain";
import UserAuthentication from "../header/UserAuthentication";
import MainPromotion from "./MainPromotion";
import Footer from "../footer/Footer";

function PromotionLayout() {
    return(
        <>
            <HeaderApp navigationMain={<NavigationMain />} 
                userAuthentication={<UserAuthentication />} />
            <MainPromotion />
            <Footer />
        </>
    );
}

export default PromotionLayout;