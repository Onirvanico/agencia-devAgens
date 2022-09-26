import { Component } from "react";
import HighLights from "./HighLights";
import "../../css/responsivo.css";
import Destinations from "./Destinations";

class MainDestinations extends Component {
    render() {
        return(
            <main className="conteudo">
                <HighLights />
                <Destinations />
            </main>
        );
    }
}

export default MainDestinations;