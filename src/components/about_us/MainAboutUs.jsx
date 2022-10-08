import { Component } from "react";
import ContentDevelopment from "./ContentDevelopment";
import ContentIntro from "./ContentIntro";
import IntroImage from "./IntroImage";
import "../../css/sobre-nos.css";

class MainAboutUs extends Component {
    render() {
        return(
            <main className="sobre_app_main">
                <IntroImage />
                <ContentIntro />
                <ContentDevelopment />
            </main>
        );
    }
}

export default MainAboutUs;