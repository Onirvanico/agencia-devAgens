import HeaderApp from "../header/HeaderApp";
import NavigationMain from "../header/NavegationMain";
import UserAuthentication from "../header/UserAuthentication";
import "../../css/contato.css";
import MainContacts from "./MainContacts";
import ContactsAside from "./ContactsAside";
import Footer from "../footer/Footer";

 const ContactLayout = () => {
    return(
        <div className="app_contato">
            <div className="contato_app_header">
                <HeaderApp navigationMain={<NavigationMain />} userAuthentication={<UserAuthentication />} />
            </div>
            <MainContacts />
            <ContactsAside />
            <div className="contato_app_footer">
                <Footer  />
            </div>
        </div>
    );
}

export default ContactLayout;