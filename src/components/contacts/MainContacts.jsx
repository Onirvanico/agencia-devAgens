import { Component } from "react";
import ContactsForm from "./ContactsForm";
import ContactsInfo from "./ContactsInfo";


class MainContacts extends Component {
    render() {
        return(
            <main className="contato_app_main">
                <ContactsInfo />
                <ContactsForm />
            </main>
        );
    }
}

export default MainContacts;